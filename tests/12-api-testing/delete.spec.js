const {test, expect} = require('@playwright/test'); 

test('Delete user', async({request})=>{
    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/users/1'
    );
    console.log(await response.status());
    expect(response.status()).toBe(200);
});

test('Validate delete response', async({request})=>{
    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/users/1'
    );
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual({});
});

test('DELETE with custom headers', async({request})=>{
    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            headers: {
                'X-Test': 'Playwright'
            }
        }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('Handle 204 No Content', async({request})=>{
    const response = await request.delete(
        'https://httpbin.org/status/204'
    );
    await expect(response.status()).toBe(204);
});