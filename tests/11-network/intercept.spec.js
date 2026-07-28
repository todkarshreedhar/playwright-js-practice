const {test} = require('@playwright/test')

// Listen to Every Request
test('Capture all network requests', async({page})=>{
    page.on('request', request=>{
        console.log('--------------------------------');
        console.log('URL: ',request.url());
        console.log('Method: ', request.method());
        console.log('Headers: ',request.headers());
        console.log('Resource Type:', request.resourceType());
        console.log('Post Data:',request.postData());
    });
    await page.goto('https://playwright.dev');
});

// Listen Only for API Calls
test('Capture API Requests', async({page})=>{
    page.on('request', request=>{
        if(
            request.url().includes('/api')&& //not important condition
            (request.resourceType()==='xhr'||
            request.resourceType()==='fetch')
        ){
            console.log('--------------------------------');
            console.log('URL: ',request.url());
            console.log('Method: ', request.method());
            //console.log('Headers: ',request.headers());
            console.log('Resource Type:', request.resourceType());
            //console.log('Post Data:',request.postData());
        }
    });
    await page.goto('https://reqres.in');
});

// Capture Responses
test('Capure responses', async({page})=>{
    page.on('response', async response=>{
        console.log('--------------------------------');
        console.log(response.status());
        console.log(response.url());
        
    });
    await page.goto('https://playwright.dev');
});


test('Reading Response Headers', async({page})=>{
    page.on('response', async response=>{
        console.log('--------------------------------');
        console.log(await response.allHeaders());
        
    });
    await page.goto('https://playwright.dev');
});


test('Reading Response Body', async({page})=>{
    page.on('response', async response=>{
        console.log('--------------------------------');
            if (response.url().includes('/api')) 
            {
                const body =await response.text();
                console.log(body);
            }
        
    });
    await page.goto('https://reqres.in');
});