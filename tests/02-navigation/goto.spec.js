const {test, expect} = require('@playwright/test');

test('Navigate to Playwright website',async({page}) => {
    //1
    //await page.goto('https://playwright.dev');
    //2
    // await page.goto('https://playwright.dev', {
    // waitUntil: 'networkidle', // Choices: 'load', 'domcontentloaded', 'networkidle', or 'commit'
    // timeout: 30000            // Time in milliseconds before throwing an error (default: 30 seconds)
    // });
    //3
    // try {
    //     await page.goto('https://example.com');
    // } catch (error) {
    //     console.error(`Navigation failed: ${error.message}`);
    // }
    //4
    const response = await page.goto('https://playwright.dev');
    console.log('Title :', await page.title());
    console.log('URL   :', page.url());
    //additionals
    console.log(response.status());
    console.log(response.ok());
    console.log(response.url());
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveURL('https://playwright.dev/');
    
});

//npx playwright test tests/02-navigation/goto.spec.js --headed