const {test, expect} = require('@playwright/test');

test('Perform right click', async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button',{
        name: 'Right Click Me'
    }).click({
        button:'right'
    });

    await expect(
        page.locator('#rightClickMessage')
    ).toHaveText('You have done a right click');
});

test('Right click with timeout', async({page})=>{
    await page.goto('https://demoqa.com/buttons');

    await page.getByRole('button',{
        name:'Right Click Me'
    }).click({
        button: 'right',
        timeout: 5000
    });

    await expect(
        page.locator('#rightClickMessage')
    ).toBeVisible();
});

test('Right click with Shift Key', async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button',{
        name: 'Right Click Me'
    }).click({
        button:'right',
        modifiers:['Shift']
    });
    // Supported modifiers:
    // Shift
    // Control
    // Alt
    // Meta
});