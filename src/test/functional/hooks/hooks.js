const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { clear } = require('console');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');


let browser;
let page;

// Set the default timeout for steps
setDefaultTimeout(60000);

// Directory for screenshots in the result folder
const screenshotDir = path.join(__dirname, '../../../../results/screenshots');

// Create screenshots folder if it doesn't exist
if (!fs.existsSync(screenshotDir)){
    fs.mkdirSync(screenshotDir, { recursive: true });
}

Before(async function () {
  // Start the browser before each scenario
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  this.page = page; // Share the page object with other files (step definitions, page objects)
});


// Capture screenshots for all steps 
AfterStep(async function ({ result, pickle }) {
    const page = this.page; // Get the page object

    // Capture a screenshot for every step
    const uniqueFileName = `${pickle.name.replace(/\s+/g, '_')}-step-${new Date().getTime()}.png`;
    const screenshotPath = path.join(screenshotDir, uniqueFileName);
    await page.screenshot({ path: screenshotPath, type: 'png' });
    console.log(`Screenshot for step saved at: ${screenshotPath}`);

    // Attach the screenshot to the report
    const screenshot = await fs.promises.readFile(screenshotPath);
    await this.attach(screenshot, "image/png");
});


After(async function(scenario) {
    const page = this.page; // Get the page object
    const browser = this.browser; // Get the browser object

    // Close the page and browser after the test
    if (page) {
        await page.close();
    }

    if (browser) {
        await browser.close();
    }
});


