const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = this.page.locator("#user-name");
        this.password = this.page.locator("#password");
        this.signinbtn = this.page.locator("#login-button");
        this.welcomeText = this.page.locator(".app_logo");
        this.errorMessage = this.page.locator("[data-test='error']");
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinbtn.click();
    }

    async verifyLogin() {
        //using assertion to verify login instead of printing on console
        // const text = await this.welcomeText.textContent();
        // console.log(text);
        await expect(this.welcomeText).toHaveText("Swag Labs");
    }

    async loginFailed(expectedMessage) {

        // assert first
        await expect(this.errorMessage).toHaveText(expectedMessage);
        // if you want the actual text value
        console.log(await this.errorMessage.textContent());
    }

    async getErrorMessage()
    {
        return this.errorMessage.textContent();
    }

}


module.exports = LoginPage;