const puppeteer = require("puppeteer");
const { execSync, spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const SCREENSHOTS_DIR = path.join(__dirname, "..", "screenshots");

async function waitForServer(url, maxRetries = 30) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await fetch(url);
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  throw new Error("Server did not start");
}

async function main() {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  // Start dev server
  console.log("Starting Next.js dev server...");
  const server = spawn("npx", ["next", "start", "-p", "3099"], {
    cwd: __dirname,
    stdio: "pipe",
  });

  // Build first
  console.log("Building...");
  execSync("npx next build", { cwd: __dirname, stdio: "pipe" });

  console.log("Waiting for server...");
  await waitForServer("http://localhost:3099");
  console.log("Server ready!");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    // Desktop full page
    console.log("Taking desktop screenshot...");
    const desktopPage = await browser.newPage();
    await desktopPage.setViewport({ width: 1920, height: 1080 });
    await desktopPage.goto("http://localhost:3099", { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000)); // Wait for animations
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-full.png"),
      fullPage: true,
    });
    console.log("Desktop full page saved.");

    // Desktop viewport
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-hero.png"),
      fullPage: false,
    });
    console.log("Desktop hero saved.");

    // Scroll to each section
    const sections = ["problem", "technology", "product", "applications", "about", "contact"];
    for (const section of sections) {
      await desktopPage.evaluate((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
      }, section);
      await new Promise((r) => setTimeout(r, 1000));
      await desktopPage.screenshot({
        path: path.join(SCREENSHOTS_DIR, `desktop-${section}.png`),
        fullPage: false,
      });
      console.log(`Desktop ${section} saved.`);
    }
    await desktopPage.close();

    // Mobile full page
    console.log("Taking mobile screenshot...");
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844 });
    await mobilePage.goto("http://localhost:3099", { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000));
    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-full.png"),
      fullPage: true,
    });
    console.log("Mobile full page saved.");

    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-hero.png"),
      fullPage: false,
    });
    console.log("Mobile hero saved.");
    await mobilePage.close();

    console.log("All screenshots captured!");
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
