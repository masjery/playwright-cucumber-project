// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.saucedemo.com/';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    // Using Playwright’s getBy methods (semantic locators)
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}

module.exports = { LoginPage };
