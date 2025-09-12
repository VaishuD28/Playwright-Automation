// const { test, expect } = require('@playwright/test');
// const { POManager } = require('../pageObjects/POManager');

// test.only('Login page validation', async ({ page }) => {

//     const userName = "standard_user";
//     const password = "secret_sauce";
    
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill(userName);
//     await page.locator("#password").fill(password);
//     await page.locator(".submit-button").click();

//     //const poManager = new POManager(page);

//     //Login page
//     // const loginPage = poManager.getloginpage();
//     // await loginPage.goto();
//     // await loginPage.validLogin(username, password);

//     //dashboard page
//    await page.waitForLoadState("networkidle");
//    const titles = await page.locator(".inventory_item_name").allTextContents();
//    console.log(titles);
//    const productNameLocator = page.locator(".inventory_item_name");
//    const productName = "Sauce Labs Backpack";
//    const count = await productNameLocator.count();
//    for(let i=0; i<count; ++i)
//    {
//      //  const name = await productNameLocator.nth(i).textContent();
//        if(await productNameLocator.nth(i).textContent() === productName)
//        {
//          //add to cart
//          await page.locator(".inventory_item").nth(i).locator("text = Add to cart").click();
//          break;
//        }
//    }
//    await page.locator("[data-test='shopping-cart-link']").click();




    
// });