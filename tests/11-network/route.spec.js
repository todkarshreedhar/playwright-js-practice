const {test} = require('@playwright/test');

// **/*	            Every request
// **/*.png	        PNG images
// **/*.jpg	        JPG images
// **/*.css	        CSS files
// **/*.js	        JavaScript files
// **/api/**	    URLs containing /api/
// **/users/*	    User endpoints

// Intercept Every Request
test('Intercept all requests', async({page})=>{
    await page.route('**/*', async route=>{
        const request = route.request();
        console.log('-----------------------------');
        console.log(request.url());
        console.log(request.method());
        //console.log(request.headers());
        //console.log(request.postData());
        console.log(request.resourceType());
        await route.continue();
    });
    await page.goto('https://playwright.dev');
});
//Continue a Request
test('Continue intercepted request', async({page})=>{
    await page.route("**/*", async route=>{
        console.log('Intercepted:', route.request().url());
        await route.continue();
    });
    await page.goto('https://playwright.dev');
});
// Inspect a Request
test('Inspect a Request', async({page})=>{
    await page.route('**/*', async route=>{
        console.log(route.request().url());
        await route.continue();
    });
    await page.goto('https://reqres.in');
});

// Block Requests
// examples:
// 1 Block advertisements
// 2 Block analytics
// 3 Block third-party scripts
// 4 Simulate network failures
test('Block Requests', async({page})=>{
    await page.route('**/*.png', async route => {
        console.log(route.request().url());
        await route.abort();
    });
    await page.goto('https://playwright.dev');
});

