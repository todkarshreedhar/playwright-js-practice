const {test, expect} = require('@playwright/test');

test('Locate element using getByTestId()', async({page})=>{

    await page.setContent(`
        <button data-test="login-button">
            Login
        </button>    
    `);

    await page.getByTestId('login-button').click();

    await expect(
        page.getByTestId('login-button')
    ).toBeVisible();
});

test('Swag Labs', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page
    .getByTestId('username')
    .fill('Shreedhar');
    await expect(page
    .getByTestId('username'))
    .toHaveValue('Shreedhar');

});

//npx playwright test tests/03-locators/testId.spec.js --headed --project=chromium