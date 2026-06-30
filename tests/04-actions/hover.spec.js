const {test, expect} = require('@playwright/test');

test('Hover over button and verify tooltip', async({page})=>{
    await page.goto('https://demoqa.com/tool-tips');

    await page.waitForTimeout(3000);// not recommended in normal situation
    const hoverButton = await page.locator('#toolTipButton');
    await hoverButton.hover();
    const tooltip = await page.locator('.tooltip-inner');
    await tooltip.waitFor({state: 'visible', timeout: 5000});

    await expect(tooltip)
    .toHaveText('You hovered over the Button');

});

test('Hover at specific position', async ({ page }) => {

    await page.goto('https://demoqa.com/tool-tips');

    await page.getByRole('button', {
        name: 'Hover me to see'
    }).hover({
        position: {
            x: 20,
            y: 10
        }
    });

});


// Best Practices
// ✔ Hover only when the UI genuinely requires it.
// ✔ Verify the result of the hover (tooltip, menu, hidden button).
// ✔ Prefer semantic locators such as getByRole().
// ✔ Avoid fixed waits after hovering. Use assertions instead.


// Q1. How do you perform a hover in Playwright?
// await locator.hover();

// Q2. What happens internally during hover()?
// Playwright:
// Scrolls the element into view if needed.
// Performs actionability checks.
// Moves the mouse pointer.
// Fires browser hover events.

// Q3. When is hover commonly used?
// Navigation menus
// Tooltips
// Hidden action buttons
// Dropdown menus
// Product cards
// Charts and dashboards