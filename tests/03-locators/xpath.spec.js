const {test, expect} = require('@playwright/test');

test('Login using Xpath locators',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    //await page.locator('//input[contains(@id,"user")]').fill('standard_user');
    //await page.locator('//input[contains(@id,"password")]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    await expect(page).toHaveURL(/inventory/); 
    await page.locator('(//div[@class="inventory_item"])[1]').click();
    const items = page.locator('//div[@class="inventory_item"]');
    console.log(await items.count());
    await expect(items).toHaveCount(6);
});
//Absolute XPath ❌
// /html/body/div/div/div/div/form/input[1]

//Relative XPath ✅
// //input[@id='user-name']

// XPath by Attribute
// page.locator('//input[@id="user-name"]');

//XPath by Text
// page.locator('//button[text()="Login"]');

// XPath Using contains()
// page.locator('//button[contains(@id,"login")]');

// XPath Using starts-with()
// page.locator('//input[starts-with(@id,"user")]');

// XPath Indexing
//page.locator('(//button)[1]')
//page.locator('(//button)[3]')

// Parent
// //button/parent::div

// Child
// //div/child::button

// Following Sibling
// //label[text()="Username"]/following-sibling::input

// Preceding Sibling
// //input/preceding-sibling::label

// Ancestor
// //button/ancestor::form

//Descendant
// //form/descendant::input

// Real-World Example
//page.locator('//label[text()="Username"]/following-sibling::input')



//npx playwright test tests/03-locators/xpath.spec.js --headed --project=chromium