// Intercept

// ↓

// Send request

// ↓

// Receive response

// ↓

// Modify response

// ↓

// Return response

const {test, expect}  = require('@playwright/test');
test('Modify API response', async({page})=>{
    await page.route('**/users/2', async route=>{
        const response = await route.fetch();
        const body=await response.json();
        body.name='Playwright';//update
        body.username = 'Testing';//update
        body.department = 'QA';//add new field
        delete body.address;//Remove a Field
        await route.fulfill({
            response,
            json:body
        });   
    });
    const json = await page.evaluate(async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
            return await res.json();
    });
    console.log(json);
    
});

