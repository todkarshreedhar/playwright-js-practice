const {test} = require('@playwright/test');

// Block All Images
test('Block image requests', async({page})=>{
    await page.route('**/*.{png,jpg,jpeg,gif,svg,webp}', async route=>{
        console.log('Blocked: ', route.request().url());
        await route.abort();                                    
    });
    await page.goto('https://playwright.dev');
});
// Block CSS files
test('Block CSS files', async({page})=>{
    await page.route('**/*.css', async route=>{
        console.log('Blocked: ', route.request().url());
        await route.abort();
    });
    await page.goto('https://playwright.dev');
});
// Block JavaScript files
test('Block JavaScript files', async({page})=>{
    await page.route('**/*.js', async route=>{
        console.log('Blocked: ', route.request().url());
        await route.abort();
    });
    await page.goto('https://playwright.dev');
});
// Block API Requests
test('Block API Requests', async({page})=>
    {
        await page.route('**/api/**', async route=>{
        console.log('Blocked API:', route.request().url());
        await route.abort();
    });
    await page.goto('https://reqres.in');
});
// Block Third-Party Analytics - Just example
test('Block analytics', async({page})=>{
    await page.route('**google-analytics.com/**', async route=>{
        await route.abort();
    });
    await page.goto('https://example.com')
});