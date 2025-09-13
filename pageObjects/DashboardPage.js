class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".inventory_item");
        this.productTitles = this.page.locator(".inventory_item_name");
        this.cart = page.locator("[data-test='shopping-cart-link']")

    }

    async getProducts() {
        const names = await this.productTitles.allTextContents();
        console.log("Available products:", names);
        return names;
    }

    async addProductToCart(productName) {
        const count = await this.productTitles.count();
        for (let i = 0; i < count; ++i) {
          const name = (await this.productTitles.nth(i).innerText()).trim();
            if (name === productName) {
                //add to cart
                await this.products.nth(i).getByRole("button", { name : "Add to cart" }).click();
                return;
            }
        }
        // handling expect when product is not found.
        throw new Error(`Product "${productName}" not found on Dashboard`);
    }

    async goToCart() {
        await this.cart.click();
    }
}

module.exports = DashboardPage;