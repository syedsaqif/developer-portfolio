import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const executablePath = fs.existsSync(CHROME_PATH) ? CHROME_PATH : EDGE_PATH;

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1280", width: 1280, height: 800 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
];

const outDir = path.resolve("./screenshots");

async function run() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });

    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
    
    // Auto-scroll through the entire page so whileInView triggers for all sections
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let currentY = 0;
        const step = 350;
        const timer = setInterval(() => {
          window.scrollBy(0, step);
          currentY += step;
          if (currentY >= document.body.scrollHeight) {
            clearInterval(timer);
            // Scroll back to top
            window.scrollTo(0, 0);
            setTimeout(resolve, 300);
          }
        }, 80);
      });
    });

    await new Promise((r) => setTimeout(r, 600));

    // Full page screenshot
    const fullPath = path.join(outDir, `${vp.name}-full.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved ${fullPath}`);

    // Above-the-fold screenshot
    const viewPath = path.join(outDir, `${vp.name}-fold.png`);
    await page.screenshot({ path: viewPath, fullPage: false });
    console.log(`Saved ${viewPath}`);

    await page.close();
  }

  await browser.close();
  console.log("All screenshots captured successfully.");
}

run().catch(console.error);
