const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { Before, BeforeStep, After, AfterStep } = require('@cucumber/cucumber');
const { Status } = require('@cucumber/cucumber');
const path = require("path");

Before( async function () {

const browser = await playwright.chromium.launch({
        headless: false,
        timeout: 70000
    });

    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});


BeforeStep(async function () {

});

AfterStep(async function (result) {
    if (result.status === Status.FAILED)
    {
       //await this.page.screenshot({ path : 'errorfinding.png'});
        const screenshotPath = path.join(
            'screenshots',
            `FAILED_${Date.now()}.png`
        );
        await this.page.screenshot({ path: screenshotPath });
        console.log(`📸 Screenshot saved at: ${screenshotPath}`);
    }
});


After( function (result) {

    console.log("This is the end...");
});
