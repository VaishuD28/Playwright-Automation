class CheckoutPage
{
    constructor(page)
    {
        this.page=page;
        this.firstName = this.page.getByPlaceholder("First Name");
        this.lastName = this.page.getByPlaceholder("Last Name");
        this.pin = this.page.getByPlaceholder("Zip/Postal Code");
        this.continueBtn = this.page.locator("#continue");
    }

    async fillDetails(firstname, lastname, pin)
    {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.pin.fill(pin);
    }
    async navigateToReviewPage()
    {
        await this.continueBtn.click();

    }
}


module.exports = CheckoutPage ; 