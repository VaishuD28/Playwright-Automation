const { expect } = require('@playwright/test');

class ReviewPage {
    constructor(page) {
        this.page = page;
        this.productTitles = this.page.locator(".inventory_item_name");
        this.paymentId = this.page.locator("[data-test= 'payment-info-value']");
        this.itemPrice = this.page.locator("[data-test= 'subtotal-label']");
        this.tax = this.page.locator("[data-test= 'tax-label']");
        this.totalPrice = this.page.locator("[data-test= 'total-label']");

        this.finishBtn = this.page.locator("#finish");

    }

    async validateProduct(expectedProducts) {
        await this.productTitles.first().waitFor();

        for (const productName of expectedProducts) {
            const productLocator = await this.page.locator(`.inventory_item_name:has-text("${productName}")`);//Use backticks when you need to inject variables (${...}));
            await expect(productLocator).toBeVisible();
            const actualText = await productLocator.textContent();

            console.log(actualText);
            break;


        }
    }

    async getPaymentDetails() {
        const paymentId = await this.paymentId.textContent();
        console.log(paymentId);
    }


    async validatePriceCalculation() {
        //get the text content from locators
        const itemPriceText = await this.itemPrice.textContent();
        const taxText = await this.tax.textContent();
        const totalPriceText = await this.totalPrice.textContent();

        //parseFloat - converts string "28.9" to floating point number -> 28.9
        //It scans the string from the beginning:

        // If it starts with a number → it extracts it until it hits a non-number.
        // If it doesn’t start with a number → it returns NaN (Not a Number).

        // Extract numeric values (remove text + $ sign)
        const itemPrice = parseFloat(itemPriceText.replace('Item total: $', '')); //here replacing text with space
        const tax = parseFloat(taxText.replace('Tax: $', ''));
        const totalPrice = parseFloat(totalPriceText.replace('Total: $', ''));

        //calculate expected output price

        const expectedPrice = parseFloat((itemPrice + tax).toFixed(2)); //no. of digits after decimal point

        console.log(`Item Price: ${itemPrice}, Tax Price: ${tax}, Expected Total Price: ${expectedPrice} and Total Price shown on UI: ${totalPrice}`);

        expect(totalPrice).toBe(expectedPrice);

    }

    async navigatetoCompletePage() {
        await this.finishBtn.click();
    }
}

module.exports = ReviewPage; 
