const { Given, Then, When } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const POManager = require('../../pageObjects/POManager');


// Given('I login to the Ecommerce application with {string} and {string}', { timeout: 200 * 1000 },
//   async function (username, password) {
//     // Write code here that turns the phrase above into concrete actions
//     const loginPage = this.poManager.getLoginPage();
//     await loginPage.goto();
//     await loginPage.login(username, password);

//   });

// When('login should be successful', async function () {
//   // Write code here that turns the phrase above into concrete actions
//   const welcomeText = this.poManager.getLoginPage();
//   await welcomeText.verifyLogin();
// });


Then('I add {string} to the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const dashboardPage = this.poManager.getDashboardPage();
  // await dashboardPage.displayProducts();
  await dashboardPage.addProductToCart(productName);
  await dashboardPage.goToCart();
});



////////////////////////Invalid credentials///////////////////////////////////

Given('I login to the Ecommerce application with {string} and {string}', { timeout: 200 * 1000 },
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(username, password);

  });


Then('I should see a message {string}', { timeout: 200 * 1000 }, async function (errorMessage) {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = this.poManager.getLoginPage();
  const errorText = await loginPage.getErrorMessage();
  expect(errorText).toContain(errorMessage);


});


////////////////////////////@FailedUsers ////////////////////////////////

Given('I login to the Ecommerce application with invalid credentials {string} and {string}', { timeout: 200 * 1000 },
  async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(username, password);
  });

Then('login should fail with an error message', { timeout: 200 * 1000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  const errorText = this.poManager.getLoginPage();
  await errorText.loginFailed("Epic sadface: Sorry, this user has been locked out.")
});


////////////////  @ProductNotFound ///////////////////////

Given('I logged in with {string} and {string}', { timeout: 200 * 1000 }, async function (username, password) {

  const loginPage = this.poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.login(username, password);
});


When('The {string} is not found in the cart', async function (productName) {
  const dashboardPage = this.poManager.getDashboardPage();
  try {
    await dashboardPage.addProductToCart(productName);
  } catch (error) {
    this.errorMessage = error.message;
  }
});

Then('It should throw error: Product is not found', async function () {
  console.log("Error: ", this.errorMessage);
  await expect(this.errorMessage).toContain('not found on Dashboard');

});

/////////////////////Cart page ---   @PassedUsers/////////////////////////////
Given('I login to the application with {string} and {string}', { timeout: 200 * 1000 },
  async function (username, password) {
    // this.poManager = new POManager(this.page);
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(username, password);
  });

When('login should be successful', async function () {
  // Write code here that turns the phrase above into concrete actions
  const welcomeText = this.poManager.getLoginPage();
  await welcomeText.verifyLogin();
});

Then('I add {string} and {string} to the cart', async function (productName1, productName2) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.addProductToCart(productName1, productName2);

});

When('Verify products {string} and {string} should be added to cart', async function (productName1, productName2) {
  this.cartPage = this.poManager.getCartPage();
  await this.dashboardPage.goToCart();
  await this.cartPage.cartValidation([productName1, productName2]);
});

Then('Remove {string} from the cart', async function (productName2) {

  await this.cartPage.removeProduct(productName2);
  await this.cartPage.checkOutPage();
});

When('I fill details {string}, {string} and {string} and continue', async function (firstname, lastname, pin) {
this.checkOutPage = this.poManager.getCheckOutPage();
await this.checkOutPage.fillDetails(firstname, lastname, pin);
await this.checkOutPage.navigateToReviewPage();

});




