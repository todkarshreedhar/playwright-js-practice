//An explicit wait means your test deliberately waits for something before continuing.
const {test} = require('@playwright/test');

test('Demonstrate explicit wait', async({page})=>{
    await page.goto('https://playwright.dev');
    console.log('Before wait');
    await page.waitForTimeout(3000);
    console.log('After wait');

});


// Why Is waitForTimeout() Usually a Bad Idea?
// Suppose an element appears after 500 ms.
// You write:
// await page.waitForTimeout(5000);
// Your test wastes:
// 5000 - 500 = 4500 ms
// Now imagine 100 tests containing several unnecessary waits.
// Your test suite becomes a sleepy tortoise. 🐢


// Playwright doesn't blindly execute the click immediately.
// It waits for the element to satisfy the necessary actionability conditions, such as being:
// Present
// Visible
// Stable
// Enabled
// Able to receive the click
// Conceptually:
// Find element
//      ↓
// Wait
//      ↓
// Visible?
//      ↓
// Stable?
//      ↓
// Enabled?
//      ↓
// Receives events?
//      ↓
// CLICK


// 8. When Can waitForTimeout() Be Useful?

// There are situations where a fixed delay can be useful, particularly during debugging.

// For example:

test('Debug page', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await page.waitForTimeout(5000);

});


// await page.waitForTimeout(3000);
// Means:
// Wait three seconds regardless of what happens.

// await page.waitForSelector('#login');
// Means:
// Wait until the selector satisfies the specified state.


// Playwright automatically waits for the button to become actionable.

// Or, if you're explicitly waiting for a particular state:

// await page.locator('#continue')
//     .waitFor({ state: 'visible' });