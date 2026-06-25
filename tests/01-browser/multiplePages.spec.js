const {test, browser, expect} = require('@playwright/test');

test('Work with muliple pages in same context', async({context})=>{
    const page1 = await context.newPage();
    await page1.goto('https://playwright.dev');
    
    const page2 = await context.newPage();
    await page2.goto('https://www.google.com');

    const title1=await page1.title();
    const title2=await page2.title();

    console.log('Page 1 Title: '+ title1);
    console.log('Page 2 Title: '+ title2);

    //assertions
    expect(title1.length).toBeGreaterThan(0);
    expect(title2.length).toBeGreaterThan(0);

    await context.close();
});