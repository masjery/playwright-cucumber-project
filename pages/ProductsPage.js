const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.inventory_item'); // container for each product
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addFirstProductToCart() {
    const firstProduct = this.products.nth(0);
    this.addedProductName = await firstProduct.locator('.inventory_item_name').textContent();
    await firstProduct.locator('button').click();
    return this.addedProductName; // return the name
  }

  async verifyCartCount(count = 1) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async getAddedProductName() {
    return this.addedProductName;
  }
}

module.exports = ProductsPage;
