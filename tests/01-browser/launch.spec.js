const {test, expect} = require('@playwright/test');

test('Launch browser and verify title', async({page})=>{
    await page.goto('https://playwright.dev/');
    const title = await page.title();
    console.log(`Page Title : ${title}`);
})

//npx playwright test tests/01-browser/launch.spec.js // Run headless
//npx playwright test tests/01-browser/launch.spec.js -- headed