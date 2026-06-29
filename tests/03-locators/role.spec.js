const {test,expect} = require('@playwright/test');
test('Navigate using getByRole()', async({page})=>{
    await page.goto('https://playwright.dev');
    await page.getByRole('link', {
        name: 'Docs'
    }).click();
    await expect(page).toHaveURL(/docs/);
});

test('Login using Role locators', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox',{
        name:'Username'
    }).fill('standard_user');
    await page.getByRole('textbox',{
        name:'Password'
    }).fill('secret_sauce');
    await page.getByRole('button',{
        name:'Login'
    }).click();

    page.getByRole('button', {
        name: 'Login',
        exact: true
    });

    await expect(page).toHaveURL(/inventory/);
});
test('Getting Started', async({page})=>{
    await page.goto('https://playwright.dev');
    await page.getByRole('link', {
        name: 'Get started'
    }).click();
    await expect(page).toHaveURL(/intro/);
});

//npx playwright test tests/03-locators/role.spec.js --headed --project=chromium
