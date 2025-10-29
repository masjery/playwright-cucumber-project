const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');

let browser;
let context;
let page;
let loginPage;
let productsPage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
});

After(async () => {
  await browser.close();
});

Given('I am logged in with username {string} and password {string}', async (username, password) => {
  await loginPage.navigateToLoginPage();
  await loginPage.login(username, password);
  await expect(page).toHaveURL(/inventory/);
});

/*When('I add the first product to the cart', async () => {
  await productsPage.addFirstProductToCart();
});

Then('the cart should show 1 item', async () => {
  await productsPage.verifyCartCount(1);
}); */

When('I add the first product to the cart', async () => {
  const productName = await productsPage.addFirstProductToCart();
  console.log('Added product to cart:', productName);
});

Then('the cart should show 1 item', async () => {
  await productsPage.verifyCartCount(1);

  const productName = await productsPage.getAddedProductName();
  console.log('Product in cart is:', productName);

  // assert that the product name is not empty
  if (!productName) throw new Error('No product was added to the cart!');
});
