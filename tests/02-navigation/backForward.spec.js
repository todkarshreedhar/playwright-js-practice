const{ test, expect} = require('@playwright/test');

test('Navigate back and forward in browser history', async({page})=>{
    // First page
    await page.goto('https://playwright.dev');
    console.log('Current URL:', page.url());
    // Second page
    await page.goto('https://example.com');
    console.log('Current URL:', page.url());
    // Go Back
    await page.goBack();
    //await page.goBack({
    //   waitUntil: 'networkidle', // 'load', 'domcontentloaded', 'networkidle', or 'commit'
    //   timeout: 15000            // Time in milliseconds before throwing an error
    // });
    console.log('After back URL:', page.url());
    await expect(page).toHaveURL('https://playwright.dev');
    // Go Forward
    await page.goForward();
    console.log('After forward URL:', page.url());
    await expect(page).toHaveURL('https://example.com');
});