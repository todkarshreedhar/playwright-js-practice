const {test, expect} = require('@playwright/test');

test('Create a user', async({request})=>{

        const response = await request.post('https://jsonplaceholder.typicode.com/users',
        {
            name: 'Shreedhar Todkar',
            username: 'shreedhar',
            email: 'Sincere@april.biz' 
        });
        const body = await response.json();
        console.log(body);
        expect(response.status()).toBe(201);

});

test('Validate created user', async({request})=>{
        const response = await request.post('https://jsonplaceholder.typicode.com/users',
        {
            name: 'SKT',
            username:'krra'
        });
        const json = await response.json();
        console.log(json);
        expect(json.id).toBeDefined();
        expect(json.id).toBe(11);
});

test('POST with custom headers', async({request})=>{
    const response = await request.post('https://jsonplaceholder.typicode.com/users',
        {
            headers:{
                'X-Test':'Playwright'
            },
            name:'Shreedhar',
            username:'QA Engineer'
        });
        console.log(response.status());
        expect(response.status()).toBe(201);
});

test('Read response headers',async({request})=>{
        const response = await request.post('https://jsonplaceholder.typicode.com/users',
        {
            name:'Shreedhar',
            username:'QA Engineer'
        });
        console.log(response.headers());
        expect(response.headers()['content-type']).toContain('application/json');
});