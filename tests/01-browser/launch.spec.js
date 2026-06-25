const {test, expect} = require('@playwright/test');

test('Browser Information', async({page, browserName})=>{
    await page.goto('https://playwright.dev/');
    console.log('Browser :', browserName);
    console.log('Title   :', await page.title());
    console.log('URL     :', page.url());
})
// 1. Run particular test
//npx playwright test tests/01-browser/launch.spec.js // Run headless
//npx playwright test tests/01-browser/launch.spec.js --headed

// 2. Generate Report
//npx playwright test
//npx playwright show-report
