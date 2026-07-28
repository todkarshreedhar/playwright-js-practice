const {test,expect} = require('@playwright/test');

test('Enter text into textarea', async({page}) =>{

    await page.goto('https://demoqa.com/text-box');
    const address = page.locator('#currentAddress');
    await address.fill('Pashan\nPune\nMaharashtra\nIndia');
    await expect(address).toHaveValue('Pashan\nPune\nMaharashtra\nIndia');
});

// //Multi-Line Input:
// await textarea.fill(
// 'Line 1\nLine 2\nLine 3'
// );

// //Type Like a Real User
// await textarea.pressSequentially(
//     'Line 1\nLine 2\nLine 3'
// );

test('Type into textarea', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    const textarea = page.locator('#currentAddress');

    await textarea.pressSequentially(
        'Playwright\nAutomation\nTesting'
    );

    await expect(textarea)
        .toHaveValue(
            'Playwright\nAutomation\nTesting'
        );

});

//Read Textarea Value

test('Read textarea value', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    const textarea = page.locator('#currentAddress');

    await textarea.fill(
        'Automation Testing'
    );

    const value = await textarea.inputValue();

    console.log(value);

});

//Clear a Textarea

//Playwright doesn't have a dedicated clear() method.
//Instead, clear the textarea by filling it with an empty string.

test('Clear textarea', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    const textarea = page.locator('#currentAddress');

    await textarea.fill('Playwright Automation');

    await textarea.fill('');

    await expect(textarea).toHaveValue('');

});


//Replace Existing Content
test('Replace textarea content', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    const textarea = page.locator('#currentAddress');

    await textarea.fill('Old Address');

    await textarea.fill('New Address');

    await expect(textarea)
        .toHaveValue('New Address');

});


//fill() vs pressSequentially()
// fill()	                    pressSequentially()

// Instant	                    Character by character
// Clears existing text	        Mimics real typing
// Faster	                    Fires keyboard events
// Best for most tests	        Best for typing-related scenarios

