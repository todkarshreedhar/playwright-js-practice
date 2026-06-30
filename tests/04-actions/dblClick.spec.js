const {test, expect} = require('@playwright/test');

test('Perform Double click', async({page})=>{
    await page.goto('https://demoqa.com/buttons');

    await page.getByRole('button',{
        name:'Double Click Me'
    }).dblclick();

    await expect(
        page.locator('#doubleClickMessage')
    ).toHaveText('You have done a double click');
});

test('Double click with timeout', async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button', {
        name: 'Double Click Me'
    }).dblclick({
        timeout: 5000
    });
    //Same as above
    // await page.getByRole('button', {
    //     name: 'Double Click Me'
    // }).click({
    //     clickCount: 2
    // });

    await expect(
        page.locator('#doubleClickMessage')
    ).toBeVisible();
});

