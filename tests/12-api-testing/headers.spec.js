const {test, expect} = require('@playwright/test');

test('Send custom request headers', async({request})=>{
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            headers:{
                'X-Test':'Playwright',
                'X-Environment':'QA'
            }
        }
    );
    console.log(response.headers());
    expect(response.status()).toBe(200);
});

test('Send Accept header', async({request})=>{
    const response = await request.get
    ('https://jsonplaceholder.typicode.com/users/1',
        {
            headers:{
                'Accept':'application.json'
            }
        }
    );
    console.log(response.headers());
    expect(response.status()).toBe(200);
});

test('Read response headers', async({request})=>{
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1');
    const headers = response.headers();
    console.log(headers);
    expect(headers['content-type'])
    .toContain('application/json');
});


test('Reuse Common Headers',async({request})=>{
    const commonHeaders ={
        'Accept' : 'application/json',
        'X-Environment' : 'QA' 
    }
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            headers:commonHeaders
        }
    );
    console.log(response.headers());
    expect(response.status()).toBe(200);
});