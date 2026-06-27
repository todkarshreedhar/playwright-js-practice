const {test, expect} = require('@playwright/test');

test('Reload the current page',async({page})=>{
    await page.goto('https://google.com');
    console.log('Before Reload:');
    console.log(`Title:${await page.title()}`);
    //1
    // await page.reload();
    //2
    // await page.reload({
    //     waitUntil: 'networkidle', // Choices: 'load', 'domcontentloaded', 'networkidle', or 'commit'
    //     timeout: 30000            // Time in milliseconds before timing out (default: 30 seconds)
    // });
    //
    //3
    const response = await page.reload();
    console.log(response.status());
    console.log(response.ok());
    console.log(response.url());
    console.log('After Reload:');
    console.log(`Title:${await page.title()}`);
});
//Note:Any DOM element handles you saved before the reload will become invalid ("stale") after the reload. 

//npx playwright test tests/02-navigation/reload.spec.js --headed