const { Given, Then, When } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const  POManager  = require('../../pageObjects/POManager');


Given('I login to the Ecommerce application with {string} and {string}', { timeout: 200 * 1000 },
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(username, password);

  });

When('login should be successful', async function () {
  // Write code here that turns the phrase above into concrete actions
  const welcomeText = this.poManager.getLoginPage();
  await welcomeText.verifyLogin();
});


Then('I add {string} to the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const dashboardPage = this.poManager.getDashboardPage();
  // await dashboardPage.displayProducts();
  await dashboardPage.addProductToCart(productName);
  await dashboardPage.goToCart();
});


////////////////////////////Failed test ////////////////////////////////

Given('I login to the Ecommerce application with invalid credentials {string} and {string}',{ timeout: 200 * 1000 },
   async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
   const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(username, password);
});


Then('login should fail with an error message',{ timeout: 200 * 1000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  const errorText = this.poManager.getloginpage();
  await errorText.loginFailed("Epic sadface: Sorry, this user has been locked out.");
  
});