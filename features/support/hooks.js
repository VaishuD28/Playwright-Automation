const playwright = require('@playwright/test');
const POManager = require('../../pageObjects/POManager');
const { Before, BeforeStep, After, AfterStep } = require('@cucumber/cucumber');
const { Status } = require('@cucumber/cucumber');
const path = require("path");
const { trace } = require('console');

Before(async function () {

    const browser = await playwright.chromium.launch({
        headless: false,
        timeout: 70000
    });

    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

    // Start tracing before each scenario
    await this.page.context().tracing.start({
        screenshots: true,
        snapshots: true,
    });

});


// BeforeStep( function (step) {
//      console.log(`Starting Step: ${step.pickleStep.text}`);

// });
//prints every scenario step ; the Step text being executed.
// AfterStep( function (step) {
//      console.log(`Finished Step: ${step.pickleStep.text}`);

// });



AfterStep(async function (result) {
    if (result.status === Status.FAILED) {
        //await this.page.screenshot({ path : 'errorfinding.png'});
        const screenshotPath = path.join(
            'screenshots',
            `FAILED_${Date.now()}.png`
        );
        await this.page.screenshot({ path: screenshotPath });
        console.log(`📸 Screenshot saved at: ${screenshotPath}`);
    }
});


After(async function (scenario) {

    //stop tracing after step and save it 
    await this.page.context().tracing.stop(
        {
            path: `traces/${scenario.pickle.name.replace(/ /g, "_")}.zip`
        });

    //Take screenshot if scenario is failed
    if (scenario.result.status === 'FAILED') {
        const screenshot = await this.page.screenshot({
            path: `Screenshots/${scenario.pickle.name.replace(/ /g, "_")}.png`
        });
        // Attach screenshot to Cucumber report (works with allure/json/html reporters)
        await this.attach(screenshot, 'image/png');
    }

    // await this.page.close();
    // await this.context.close();
    // await this.browser.close();

    console.log("This is the end...");

});
