const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = this.page.locator("#user-name");
        this.password = this.page.locator("#password");
        this.signinbtn = this.page.locator(".submit-button");
        this.welcomeText = this.page.locator(".app_logo");
        this.errorMessage = this.page.locator("[data-test = 'error']");
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async validLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinbtn.click();
    }

    async VerifyLogin() {
        const text = await this.welcomeText.textContent();
        console.log(text);

    }

    async invalidLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinbtn.click();

    }
    async loginFailed() {

            // assert first
            await expect(this.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.");

            // if you want the actual text value
            const text = await this.errorMessage.textContent();
            console.log(text);
        }

    }



module.exports = LoginPage;