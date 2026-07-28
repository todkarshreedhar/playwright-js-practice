const { test, expect } = require('@playwright/test');
test('Mock Users API', async({page})=>{
   console.log('1. Setting up route handler...');
    await page.route('**/api/users', async route => {
        console.log('2. Inside route handler! Intercepted:', route.request().url());
        await route.fulfill({
            status: 200,
            contentType:'application/json',
            body: JSON.stringify({
                data:[
                    {
                        id:1,
                        name:'Shreedhar'
                    },
                    {
                        id:2,
                        name:'Sanika'
                    },
                    {
                        id:3,
                        name:'Trishant'
                    },
                    {
                        id:4,
                        name:'Aai'
                    },

                ]
            })
            
        });
        
    });
    
    const json= await page.evaluate(async()=>{
        const response=await fetch('https://example.com/api/users');
        return await response.json();
    });
    console.log(json);
    expect(json.data.length).toBe(4);
    
});


test('Mock 404 response', async({page})=>{
    await page.route('**/api/users', async route => 
    {
        await route.fulfill(
            {
                status: 404,
                contentType: 'application/json',
                body: JSON.stringify({
                error: 'User Not Found'})
            }
        );
    });
    const status=await page.evaluate(async()=>{
        const res = await fetch('https://example.com/api/users');
        return res.status;
    }); 
    console.log(status); 
    expect(status).toBe(404);
});

test('Mock server error', async({page}) =>{

    await page.route('**/api/users', async route=>{
        await route.fulfill(
            {
                status: 500,
                body: 'Internal Server Error'
            }
        );
    });   
    const response = await page.evaluate(async()=>{
        const res = await fetch('https://example.com/api/users');
        return {
            status: res.status,
            text: await res.text()
        };
    });
    console.log(response);
    expect(response.status).toBe(500);
    expect(response.text).toBe('Internal Server Error');
});

test('Mock Different Data', async({page})=>{
    await page.route('**/api/users', async route=>{
        await route.fulfill({
            json:{
                employees:[
                    {
                        name:'Shreedhar'
                    },
                    {
                        name:'Automation Engineer'
                    },
                ]
            }
        });
        
    });
    const json  = await page.evaluate(async()=>{ 
            const res = await fetch('https://example.com/api/users');
            return await res.json();
        }  
    );
    expect(json.employees[0].name).toBe('Shreedhar');
});