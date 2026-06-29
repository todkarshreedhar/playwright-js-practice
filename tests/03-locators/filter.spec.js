const { test, expect } = require('@playwright/test');

test('Filter products using hasText', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const backpack = page
    .locator('.inventory_item')
    .filter({
        hasText: 'Sauce Labs Backpack'
    });
    const product = page
    .locator('.inventory_item')
    .filter({
        hasText: 'Bike Light'
    });
    await expect(backpack).toBeVisible();
    await expect(product).toBeVisible();
});

test('Add Product to cart', async({page})=>{
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
            name:'Add to cart'
        })
        .click();

        await expect(
            page.locator('.shopping_cart_badge'))
            .toHaveText('1');
});

test('Cards with buy buttons', async({page})=>{
    
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const cards = page
    .locator('.card')
    .filter({
        has: page.getByRole('button', {
            name: 'Add to cart'
        })
    });
});

//Combining has and hasText

// You can combine both:

// const product = page
//     .locator('.inventory_item')
//     .filter({
//         hasText: 'Backpack'
//     })
//     .filter({
//         has: page.getByRole('button', {
//             name: 'Add to cart'
//         })
//     });

// This is stable even if the product list is reordered.
// page
//     .locator('.inventory_item')
//     .filter({
//         hasText: 'Jacket'
//     })
//     .getByRole('button', {
//         name: 'Add to cart'
//     });

