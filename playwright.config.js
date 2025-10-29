// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
//import { config } from 'process';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout : 70*1000,
  expect : {
    timeout : 5000,

  },

  //reporter : 'html',
  
  use: {

    browserName : 'chromium',
    headless : false,
    //screenshot : 'on',
    //trace: 'retain-on-failure'

    
  }, 
    
});
module.exports = config

