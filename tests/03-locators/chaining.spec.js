const {test, expect} = require('@playwright/test');

test('Chaining multiple locators', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page
    .locator('.inventory_item')
    .filter({
        hasText: 'Sauce Labs Backpack'
    })
    .getByRole('button',{
        name: 'Add to cart'
    })
    .click();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('1');
});
//Chaining:
// Inventory
//      ↓
// All Products
//      ↓
// Backpack
//      ↓
// Add to cart
//      ↓
// Click

test('Chain role and locator', async({page})=>{
    await page.goto('https://playwright.dev');
    const navigation = page.getByRole('navigation');

    await navigation
    .getByRole('link',{
        name:'Docs'
    })
    .click();

    await expect(page).toHaveURL(/docs/);
});

test('Chain locator()', async({page}) =>{
    await page.goto('https://www.saucedemo.com');
    
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('login-button').click();

    const backback= page
    .locator('.inventory_item')
    .filter({
        hasText: 'Sauce Labs Backpack'
    });

    const price  = backpack.locator('.inventory_item_price');

    console.log(await price.textContent());

    await expect(price).toBeVisible();
});


// Q1. What is locator chaining?
// It is the process of narrowing the search scope step by step by combining multiple locator methods.

// Q2. Why is chaining better than a long XPath?
// Easier to read.
// Easier to debug.
// Less fragile.
// More maintainable.


// Q3. Can different locator strategies be combined?
// Yes. For example:

// page
//     .locator('.inventory_item')
//     .filter({ hasText: 'Backpack' })
//     .getByRole('button', { name: 'Add to cart' });

// This combines CSS, filtering, and role-based locators in a single chain.