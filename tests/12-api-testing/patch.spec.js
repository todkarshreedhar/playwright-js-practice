const {test, expect} = require('@playwright/test');

test('Update user email using PATCH', async({request})=>{
    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                email:'shreedhar@example.com'
            }
        }
    );
    console.log(response.status());
    expect(response.status()).toBe(200);
});

test('Validate PATCH response', async({request})=>{

    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                email:'shreedhar@example.com'
            }
        }
    );
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.email).toBe('shreedhar@example.com');
});

test('Update multiple fields', async({request})=>{
    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                name:'Shreedhar Todkar',
                username:'automation_master'
            }
        }
    );
    const body = await response.json();
    console.log(body);
    expect(response.status()).toBe(200);
    expect(body.name).toBe('Shreedhar Todkar');
    expect(body.username).toBe('automation_master');

});

test('PATCH with custom headers', async({request})=>{
    const response = await request.patch('https://jsonplaceholder.typicode.com/users/1',
        {
            headers:{
                'X-Test':'Playwright'
            },
            'data':{
                email:'automation@example.com'
            }
        }
    );
    expect(response.status()).toBe(200);
});