const {test,expect} = require('@playwright/test');
test('Login using CSS selectors', async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    // await page.locator('[placeholder="Username"]').fill('standard_user');
    // await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);
});
//ID Selector
//page.locator('#user-name');
//Class Selector
//page.locator('.btn_primary');
//Tag Selector
//page.locator('button');
//Attribute Selector
//page.locator('[placeholder="Username"]');
// Multiple Attributes
//page.locator('input[type="text"][name="username"]');
// Descendant Selector
//page.locator('.login-box button')
// Child Selector
//page.locator('.container > button')
// Multiple Classes
// page.locator('.btn.primary.large')
// First Matching Element
// await page.locator('.inventory_item').first().click();
// Last Matching Element
// await page.locator('.inventory_item').last().click();
// Nth Element
// await page.locator('.inventory_item').nth(2).click();


// | CSS Selector               | Description                      |
// | -------------------------- | -------------------------------- |
// | `#id`                      | Element with the specified ID    |
// | `.class`                   | Element with the specified class |
// | `button`                   | All `<button>` elements          |
// | `input[type="text"]`       | Input with `type="text"`         |
// | `.login button`            | Button inside `.login`           |
// | `.container > div`         | Direct child `div`               |
// | `[placeholder="Username"]` | Attribute selector               |
// | `.item:nth-child(2)`       | Second child element             |




//npx playwright test tests/03-locators/css.spec.js --headed --project=chromium