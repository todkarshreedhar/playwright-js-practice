const {test, expect} = require('@playwright/test');
const console = require('node:console');
// Learning Objectives
// By the end of this program, you'll understand:
// fill()
// clear()
// pressSequentially()
// inputValue()
// toHaveValue()
// selectText()
// isEditable()
// isEnabled()
// Best practices for text input

//Program 1: Enter Text Using fill()
test('Enter text using fill()', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    const fullName = page.locator('#userName');
    await fullName.fill('Shreedhar Todkar');
    await expect(fullName)
    .toHaveValue('Shreedhar Todkar');
});

//Program 2: Replace Existing Text
test('Replace existing text', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    const textbox = page.locator('#userName');
    await textbox.fill('John');
    await textbox.fill('Shreedhar');
    await expect(textbox)
    .toHaveValue('Shreedhar');
});

//Program 3: Read Textbox Value
test('Read textbox value', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    const textbox = page.locator('#userName');
    await textbox.fill('Playwright');
    const value = await textbox.inputValue();
    console.log(value);
});

// Test 1: Fill Full Name
// await expect(fullName)
//     .toHaveValue('Shreedhar Todkar');


// Test 3: Read Value
// const value =
// await textbox.inputValue();
// console.log(value);

// Test 4: Typing Simulation
// Replace fill() with:
// await textbox.pressSequentially(
//     'Playwright'
// );

