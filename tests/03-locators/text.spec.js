const {test,expect} = require('@playwright/test');
test('Locate elements using visible text',async({page})=>{
    await page.goto('https://playwright.dev');
    //1 -exact text
    //await page.getByText('Login', { exact: true });
    //2 - older text selector syntax
    //page.locator('text=Docs')
    await page.getByText('Docs').click();
    await expect(page).toHaveURL(/docs/);
});


test('Filter locator using hasText', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const backpack = page.locator('.inventory_item', {
        hasText: 'Sauce Labs Backpack'
    });

    await expect(backpack).toBeVisible();

});