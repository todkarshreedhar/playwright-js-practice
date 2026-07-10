const { test } = require('@playwright/test');
//Program 1: Move the Mouse
test('Move mouse across the page', async({page})=>{
    await page.goto('https://playwright.dev');
    await page.mouse.move(100,100);
    await page.waitForTimeout(1000);
    await page.mouse.move(300, 200);
    await page.waitForTimeout(1000);
    await page.mouse.move(600, 300);
});
//Program 2: Click Using Coordinates
test('Click using mouse coordinates', async({page})=>{
    await page.goto('https://playwright.dev');
    await page.mouse.click(150,150);
});

//Program 3: Manual Drag
test('Manual drag operation', async({page})=>{
    await page.goto('https://demoqa.com/droppable');

    const source=page.locator('#draggable');
    const target=page.locator('#simpleDropContainer>#droppable');

    const sourceBox =await source.boundingBox();
    const targetBox =await target.boundingBox();

    await page.mouse.move(
        sourceBox.x + sourceBox.width/2,
        sourceBox.y + sourceBox.height/2
    );

    await page.mouse.down();

    await page.mouse.move(
        targetBox.x + targetBox.width/2,
        targetBox.y + targetBox.height/2
    );

    await page.mouse.up();
});

// High-Level APIs
// ---------------
// locator.click()
// locator.hover()
// locator.dragTo()

//         ↓ internally uses

// Low-Level API
// -------------
// page.mouse

// Most of the time, you'll use high-level APIs. Use page.mouse when you need precise coordinate-based interactions.