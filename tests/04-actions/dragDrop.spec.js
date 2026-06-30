const {test, expect} = require('@playwright/test');
test('Perform drag and drop', async({page})=>{
    await page.goto('https://demoqa.com/droppable');
    const simpleTab = page.getByRole('tabpanel', { name: 'Simple' });
    await page.waitForTimeout(3000);
    const source = simpleTab.locator('#draggable');
    const target = simpleTab.locator('#droppable');
    await source.dragTo(target);
    await expect(target).toContainText('Dropped!');
});

// Best Practices
// ✔ Prefer dragTo() over manual mouse actions.
// ✔ Verify the result after dropping.
//          await expect(target).toContainText('Dropped!');
// ✔ Use manual mouse operations only when dragTo() doesn't work with a custom implementation.
// ✔ Keep source and target locators descriptive.