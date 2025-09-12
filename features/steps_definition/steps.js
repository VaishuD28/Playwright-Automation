const { Given, Then, When } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');


Given('Login to Ecommerce application with {string} and {string}', { timeout: 200 * 1000 },
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = this.poManager.getloginpage();
    await loginPage.goto();
    await loginPage.validLogin(username, password);

  });

When('Verify he login is passed', async function () {
  // Write code here that turns the phrase above into concrete actions
  const welcomeText = this.poManager.getloginpage();
  await welcomeText.VerifyLogin();
});


Then('Add product {string} to cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const dashboardPage = this.poManager.getDashboardPage();
  await dashboardPage.displayProducts();
  await dashboardPage.searchProduct(productName);
  await dashboardPage.addProductToCart();
});


////////////////////////////Failed test ////////////////////////////////

Given('Login to Ecommerce application with failed credentials {string} and {string}',{ timeout: 200 * 1000 },
   async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  const failedUser = this.poManager.getloginpage();
  await failedUser.goto();
  await failedUser.invalidLogin(username, password);
});


Then('Verify he login failed',{ timeout: 200 * 1000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  const errorText = this.poManager.getloginpage();
  await errorText.loginFailed();
  
});