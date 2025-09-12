class DashboardPage {
    constructor(page) 
    {
        this.page = page;
        this.products = page.locator(".inventory_item");
        this.titles = this.page.locator(".inventory_item_name");
        this.productNameLocator = this.page.locator(".inventory_item_name");
        this.cart = page.locator("[data-test='shopping-cart-link']")

    }

    async displayProducts()
    {
        const text = await this.titles.allTextContents();
         console.log(text);
    }

    async searchProduct(productName) {
        const count = await this.productNameLocator.count();
        for (let i = 0; i < count; ++i)
             {
            //  const name = await productNameLocator.nth(i).textContent();
            if (await this.productNameLocator.nth(i).textContent() === productName) {
                //add to cart
                await this.products.nth(i).locator("text = Add to cart").click();
                break;
            }
        }
    }

  async  addProductToCart()
    {
       await this.cart.click();
    }
}

module.exports = DashboardPage;