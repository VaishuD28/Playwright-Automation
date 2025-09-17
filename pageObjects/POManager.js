const LoginPage = require('./LoginPage');
const DashboardPage = require('./DashboardPage');
const CartPage = require('./CartPage');
const CheckoutPage = require('./CheckoutPage');

class POManager
{
    constructor(page)
    {
        this.page =page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = null;
        this.checkoutpage = new CheckoutPage(this.page);
    }

    // getLoginPage()
    // {
    //     return this.loginPage;
    // }

    getLoginPage() {
    if (!this.loginPage) {
        this.loginPage = new LoginPage(this.page);
    }
    return this.loginPage;
}

    // getDashboardPage()
    // {
    //     return this.dashboardPage;
    // }

    getDashboardPage() {
        if (!this.dashboardPage) {
            this.dashboardPage = new DashboardPage(this.page);
        }
        return this.dashboardPage;
    }

    getCartPage() {
    if (!this.cartPage) {
      this.cartPage = new CartPage(this.page);
    }
    return this.cartPage;
  }

  getCheckOutPage()
  {
    return this.checkoutpage;
  }

}

module.exports = POManager;