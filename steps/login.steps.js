const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage'); // Make sure the path is correct

let browser;
let context;
let page;
let loginPage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
});

After(async () => {
  await browser.close();
});

// **Exact text match with feature file**
Given('I am on the login page', async () => {
  await loginPage.navigateToLoginPage();
});

When('I login with username {string} and password {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('I should see the products page', async () => {
  await loginPage.verifySuccessfulLogin();
});
