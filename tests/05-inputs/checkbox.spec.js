const {test, expect} = require('@playwright/test');

test('Check a checkbox', async({page})=>{
    await page.goto('https://demoqa.com/checkbox');
    await page.getByLabel('Select Home').check();
    await expect(page.getByLabel('Select Home')).toBeChecked();
}
);


test('Uncheck checkbox', async({page})=>{
    await page.goto('https://demoqa.com/checkbox');
    await page.getByLabel('Select Home').check();
    await page.getByLabel('Select Home').uncheck();
    await expect(page.getByLabel('Select Home')).not.toBeChecked();
}
);