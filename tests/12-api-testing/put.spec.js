const {test, expect} = require('@playwright/test');

test('Update user using PUT', async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/users/4',
        {
            data: {
                id: 4,
                name: 'Shreedhar',
                username: 'shreedhar97',
                email: 'shreedhar@example.com'
            }
        }
    );
    //console.log(await response.headers());
    console.log(await response.json())
    expect(await response.status()).toBe(200);
});