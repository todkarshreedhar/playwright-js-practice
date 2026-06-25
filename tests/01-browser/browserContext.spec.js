const {test, expect} = require('@playwright/test');
const console = require('node:console');

test('Multiple browser contexts are isolated', async({browser})=>{
    const context1 = await browser.newContext();
    const page1context1 = await context1.newPage();
    const page2context1 = await context1.newPage();
    await page1context1.goto('https://playwright.dev');
    await page2context1.goto('https://google.com');


    const context2 = await browser.newContext();
    const page1context2 = await context2.newPage();
    const page2context2 = await context2.newPage();
    await page1context2.goto('https://example.com');
    await page2context2.goto('https://google.com');

    console.log('Page 1 Context 1 URL: ', page1context1.url());
    console.log('Page 2 Context 1 URL: ', page2context1.url());
    console.log('Page 1 Context 2 URL: ', page1context2.url());
    console.log('Page 2 Context 2 URL: ', page2context2.url());
    console.log(await context1.cookies());
    console.log(await context2.cookies());

})

//npx playwright test tests/01-browser/browserContext.spec.js --headed