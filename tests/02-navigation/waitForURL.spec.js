const {test, expect} = require('@playwright/test');

test('Wait for URL after navigation',async({page})=>{
    await page.goto('https://playwright.dev');
    //Syntax
    //await page.waitForURL(urlOrPredicate, { waitUntil: 'load', timeout: 30000 });
    //1
    // Waits until the browser hits the exact profile page
    //await page.waitForURL('https://example.com');
    //2
    // Using a relative path with a pre-configured baseURL
    //await page.waitForURL('/dashboard');
    //3
    // Matches dynamic user IDs (e.g., /user/123/settings)
    //await page.waitForURL(/\/user\/\d+\/settings/);
    //4
    // Resolves when the URL includes a specific search query parameter
    // await page.waitForURL(url => url.searchParams.has('success'));
    await page.waitForURL('https://playwright.dev/');
    console.log(`Current URL:${page.url()}`);
    await expect(page).toHaveURL('https://playwright.dev/')
});
test('Check URL', async({page})=>{
    await page.goto('https://playwright.dev/docs/intro');
    await page.waitForURL(/docs/);
    await page.waitForURL(
        /docs/,
        {
            timeout: 10000
        }
    );
});
//Best Practice: waitForURL vs Web Assertions
// While page.waitForURL() is great for controlling execution flow, the Playwright Assertions Guide recommends using web-first assertions for standard URL checks.
// Use await expect(page).toHaveURL('/dashboard') for standard validation, as it features built-in auto-retry logic and generates better test error reports.
// Use await page.waitForURL('/dashboard') when you need to explicitly halt code execution during complex multi-page redirect transitions.


