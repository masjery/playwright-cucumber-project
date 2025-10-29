// steps/login.steps.js
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

let browser;
let context;
let page;
let loginPage;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
});

After(async function () {
  await browser.close();
});

Given('I am on the login page', async function () {
  await loginPage.goto();
});

When('I login with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('I should see the products page', async function () {
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});
