const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CheckoutPage = require('../pages/CheckoutPage');

let browser, context, page, loginPage, productsPage, checkoutPage;

// Hooks
Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
  checkoutPage = new CheckoutPage(page);
});

After(async () => {
  await browser.close();
});

// Steps
Given('I am logged in and on the dashboard page', async () => {
  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifySuccessfulLogin();
});


When('I add the first product from the dashboard to the cart', async () => {
  await productsPage.addFirstProductToCart();
});

When('I proceed to checkout', async () => {
  await checkoutPage.goToCheckout();
});

When('I fill in checkout details with {string} {string} {string}', async (firstName, lastName, postalCode) => {
  await checkoutPage.fillCheckoutDetails(firstName, lastName, postalCode);
  await checkoutPage.completeOrder();
});

Then('I should see the order confirmation message', async () => {
  await checkoutPage.verifyOrderConfirmation();
  console.log('Order placed successfully!');
});
