const { expect } = require('@playwright/test');
class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.cartProducts = page.locator(".cart_item");
    }

   async cartValidation(expectedProducts) {
    await this.cartProducts.first().waitFor();

    for (const productName of expectedProducts) {
      const productLocator = this.page.locator(`.inventory_item_name:has-text("${productName}")`//Use backticks when you need to inject variables (${...})
      );
      await expect(productLocator).toBeVisible();
    }
  }
  async removeProduct(productName) {
    const removeButton = this.page.locator(
      `button[data-test="remove-${productName.toLowerCase().replaceAll(" ", "-")}"]`
    );
   // const removeButton = this.page.getByRole
    await removeButton.click();
    await expect(
      this.page.locator(`.inventory_item_name:has-text("${productName}")`)
    ).toHaveCount(0);
  }
}

module.exports = CartPage;