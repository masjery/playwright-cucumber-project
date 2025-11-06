

# Playwright Cucumber E2E Automation Framework

## Overview

This project is an end-to-end automation framework built using **Playwright** and **Cucumber (BDD)**.  
It automates core user journeys on the **SauceDemo** website, including login, adding a product to the cart, and placing an order.  
The framework follows the **Page Object Model (POM)** structure for better code reusability and maintainability.  
It is **CI/CD ready** and includes **HTML reporting** for all test executions.


## Project Structure

PlaywrightCucumberProject/
│
├── features/                # Feature files (BDD scenarios)
│   ├── login.feature
│   ├── add_to_cart.feature
│   └── place_order.feature
│
├── steps/                   # Step definitions for each feature
│   ├── login.steps.js
│   ├── add_to_cart.steps.js
│   └── place_order.steps.js
│
├── pages/                   # Page Object Model classes
│   ├── LoginPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── reports/                 # Test execution and HTML reports
│   ├── cucumber_report.json
│   └── cucumber_report.html
│
├── generateReport.js        # Script to generate HTML report
└── package.json


## Tech Stack

- **Playwright** – Browser automation  
- **Cucumber (BDD)** – Behavior-driven testing  
- **JavaScript (Node.js)** – Implementation language  
- **cucumber-html-reporter** – HTML reporting  
- **Page Object Model (POM)** – Code organization and reusability  

## Features Automated

- **Login** – Validates user login with correct credentials  
- **Add to Cart** – Adds selected products to the shopping cart  
- **Place Order** – Completes checkout and verifies confirmation message  

## How to Run Tests

1. **Install dependencies**
   ```bash
   npm install
````

2. **Run all tests** (headless mode off for visibility)

   ```bash
   npm run test:report
   ```

3. **View HTML Report**
   After test execution, open:

   ```
   reports/cucumber_report.html
   ```


## Reporting

All feature results (Login, Add to Cart, Place Order) are combined in a single **HTML report** generated through the `generateReport.js` file.
The report includes test status, duration per step, and execution environment details.


## Future Enhancements

* Add API-based authentication for faster login
* Capture screenshots on failure
* Integrate with CI/CD tools such as GitHub Actions or Jenkins


## Author

**Masrura Akter**
Automation Engineer | Playwright | Cucumber | JavaScript
GitHub: [https://github.com/masjery/playwright-cucumber-project](https://github.com/masjery/playwright-cucumber-project)

