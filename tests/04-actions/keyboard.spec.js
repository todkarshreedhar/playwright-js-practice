const {test, expect} = require('@playwright/test');

test('Type text using keyboard', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    const fullName = page.locator('#userName');
    await fullName.click();
    await page.keyboard.type('Shreedhar Todkar');
    await expect(fullName).toHaveValue('Shreedhar Todkar');
});

//Other examples:
// await page.keyboard.press('Enter');
// await page.keyboard.press('Tab');
// await page.keyboard.press('Escape');
// await page.keyboard.press('ArrowDown');

test('Navigate using Tab key', async({page}) =>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').click();
    await page.keyboard.type('Shreedhar');
    await page.keyboard.press('Tab');
    await page.keyboard.type('user@example.com');
    await expect(page.locator('#userEmail'))
    .toHaveValue('user@example.com');
});
//Keyboard Shortcuts
// await page.keyboard.press('Control+C');
// await page.keyboard.press('Control+V');
// await page.keyboard.press('Control+X');
// await page.keyboard.press('Control+Z');

test('Keyboard shortcut example', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    const textbox = page.locator('#userName');
    await textbox.click();
    await page.keyboard.type('Playwright Automation');
    await page.keyboard.press('Control+A');

});

//Best Practices
// ✔ Use locator.fill() when you simply need to set a value.
// ✔ Use keyboard.type() when you want to simulate actual typing.
// ✔ Use keyboard.press() for shortcuts and navigation and keyboard events.
// ✔ Use insertText() when keyboard events are not required.

// Method	        Fires Keyboard Events
// type()	        ✅ Yes
// insertText()	❌ No
// insertText()    directly inserts text without simulating individual key presses.


// Q1. What is the difference between fill() and keyboard.type()?
// fill()	                        keyboard.type()
// Sets the value directly	        Simulates typing character by character
// Faster	                        More realistic
// Doesn't mimic every keystroke	Fires keyboard events


// Q2. When would you use insertText()?
// When you need to insert text without triggering keyboard events, such as large pasted content or IME input.

// Q3. How do you perform keyboard shortcuts?
// Example:
// await page.keyboard.press('Control+A');
// For macOS, use:
// await page.keyboard.press('Meta+A');