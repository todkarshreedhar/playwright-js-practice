const {test, expect, chromium, firefox, webkit} = require('@playwright/test');

test('Launch Chromium, Firefox and WebKit manually', async()=>{
    const browsers =[
        {name: 'Chromium', engine: chromium},
        {name: 'Firefox', engine: firefox},
        {name: 'WebKit', engine: webkit}
    ];

    for(const browserType of browsers)
    {
        console.log(`\nLaunching ${browserType.name}...`);
        const browser=await browserType.engine.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://playwright.dev');
        const title = await page.title();
        console.log(`${browserType.name} Title: ${title}`);
        await expect(page).toHaveTitle(/Playwright/);
        await browser.close();
    }

});

//npx playwright test tests/01-browser/multiBrowser.spec.js --headed --project=chromium