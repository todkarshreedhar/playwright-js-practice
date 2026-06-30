const {test, expect} = require('@playwright/test');

test('Click Docs link', async({page})=>{

    await page.goto('https://playwright.dev');

    await page
        .getByRole('link',{
            name:'Docs'
        })
        .click();

    await expect(page).toHaveURL(/docs/);
});



test('Login using click()', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);

});

test('Trial click example', async ({ page }) => {

    await page.goto('https://playwright.dev');

    const docs = page.getByRole('link', {
        name: 'Docs'
    });

    await docs.click({
        trial: true
    });

    console.log('Element is ready to be clicked.');

    await docs.click();

    await expect(page).toHaveURL(/docs/);

});

test('Click with delay', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await page
        .getByRole('link', {
            name: 'Docs'
        })
        .click({
            delay: 500
        });

});
// Open Playwright
//         ↓
// Click Docs
//         ↓
// Documentation Page

//Click options:

//1.Left click
// await locator.click(); 
// same as 
// await locator.click({
//     button: 'left'
// });
// Other options:
// button: 'right'
// button: 'middle'

//2. clickCount
// await locator.click({
//     clickCount: 2
// });//Equivalent to a double-click.

// 3. delay
//Adds a delay between mouse down and mouse up.
// await locator.click({
//     delay: 500
// });
//Useful for testing controls that react to long presses or slower interactions.

// 4. force
// Normally Playwright refuses to click hidden or blocked elements.
// await locator.click({
//     force: true
// });
// This bypasses actionability checks.
// ⚠ Use force only when absolutely necessary. It can hide real UI issues.

//5. trial
// await locator.click({
//     trial: true
// });
// Playwright performs all actionability checks without actually clicking.
// This is useful to verify an element is ready for interaction.

//6. timeout
// await locator.click({
//     timeout: 10000
// });
//Waits up to 10 seconds for the element to become actionable.

//7. Click at a Specific Position
// await locator.click({
//     position: {
//         x: 20,
//         y: 10
//     }
// });
// Coordinates are relative to the element's top-left corner.
// Useful for:
// Canvas elements
// Maps
// Custom sliders
// Graphics editors



// Best Practices
// ✔ Use semantic locators before clicking.
// await page
//     .getByRole('button', {
//         name: 'Login'
//     })
//     .click();
// ✔ Avoid force: true unless you've confirmed it's required.
// ✔ Let Playwright's built-in waiting work for you instead of adding fixed delays.
// ✔ Use trial: true when debugging interaction issues.

// Q1. What are Actionability Checks?
// Before clicking, Playwright verifies that the element is:
// Attached to the DOM
// Visible
// Stable
// Enabled
// Receiving pointer events
// Only then does it perform the click.

// Q2. What is force: true?
// It skips Playwright's actionability checks and attempts the click regardless of whether the element is interactable.

// Q3. What is trial: true?
// It performs all actionability checks but does not actually click. It's useful for confirming that an element is ready to receive a click.
