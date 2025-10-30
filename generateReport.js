const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json',
  output: './reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Name": "SauceDemo Automation Project",
    "Test Environment": "QA",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Parallel": "Scenarios",
    "Executed": "Local Run"
  }
};

reporter.generate(options);
