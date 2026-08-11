const {test,expect} = require('@playwright/test');

test('Simple GET request',async({request})=>{

    const response = await request.get
    ('https://jsonplaceholder.typicode.com/users/2');
    console.log(response.status());
    expect(response.status()).toBe(200);

});


test('Read JSON response', async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users/2');
    const body = await response.json();
    console.log(body);
    expect(body.id).toBe(2);
    expect(body.username).toBe('Antonette');
    expect(body.name).toBe('Ervin Howell');
    expect(body.email).toBeDefined();
});

test('Validate response headers', async({request})=>{
    const response = await request.get('https://reqres.in/api');
    const headers = response.headers();
    console.log(headers);
    expect(headers['content-type']).toContain('application/json');

});

test('Verify response.ok()', async({request})=>{
    const response =  await request.get('https://jsonplaceholder.typicode.com/users/2');
    console.log(response.ok());
    expect(response.ok()).toBeTruthy();
});

