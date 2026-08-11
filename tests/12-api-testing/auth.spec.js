const {test, expect} = require('@playwright/test');

test('Basic Authentication', async({playwright})=>{
    const apiContext  = await playwright.request.newContext(
        {
            httpCredentials:{
                username:'admin',
                password:'secret'
            }
        });

    const response = await apiContext.get('https://httpbin.org/basic-auth/admin/secret');
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.authenticated).toBe(true);
    expect(body.user).toBe('admin');
});

test('Bearer Authentication', async({request})=>{

    const response = await request.get(
        'https://httpbin.org/bearer',
        {
            headers:{
                Authorization:'Bearer my-secret-token'
            }
        }
    );
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.authenticated).toBe(true);
    console.log(body);
});