import {test , expect} from '@playwright/test' ;

test('Assignment - Parabank' , async ({ page }) => {

    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto("https://parabank.parasoft.com/parabank/index.htm");

// 2.verify application logo is displayed
const logo = await page.locator('img.logo');
await expect(logo).toBeVisible();

// 3.Verify application caption displayed as "Experience the difference"
 const caption = await page.locator('p.caption');
await expect(caption).toHaveText('Experience the difference');

// 4.Enter invalid username
const username = await page.locator('input[name="username"]');
await username.fill("invaliduser");

// 5.Enter empty Password
const password = await page.locator('input[name="password"]');
await password.fill(" ");

// 6.Click on login button
const login = await page.locator('input[value="Log In"]');
await login.click();

// 7.Verify the error message "Please enter a username and password."
const errormsg = await page.locator('p.error');
await expect(errormsg).toHaveText('Please enter a username and password');

// 8.Click on admin page link
const adminpage = await page.locator('//a[text()= "Admin Page"]');
await adminpage.click();

// 9.select the option "soap" from dba mode radio button

await selectDataAccessMode(page,"soap");

// 10.Scroll to element dropdown
const loanprovider = await page.locator('select[name="loanProvider"]');
await loanprovider.scrollIntoViewIfNeeded();

// 11.Select the option web service from the dropdown
await loanprovider.selectOption({label:'Web Service'});

// 12.click on submit button
const submitButton = await page.locator('input[value="Submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successMessage = await page.locator('//b[text()="Settings saved successfully."]');
await expect(successMessage).toBeVisible();


// 14.Click on services page link
const servicesLink = await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');
await servicesLink.click();

// 15.wait for service page
const bookstoreServices = await page.locator('//span[text()= "Bookstore services:"]');
await expect(bookstoreServices).toBeVisible();

// 16.Scroll down till bookstore services table
await bookstoreServices.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
//span[text()= "Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td[1]
//span[text()= "Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td[2]

const rows = await page.locator('span[text()= "Bookstore services:"]/following-sibling::table[1]//tbody//tr');
const totalRows = await rows.count();

// 18.get total columns of books store services table
const columns = await page.locator('span[text()= "Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td');
const totalColumns = await columns.count();

// 19.Print table data (row wise and column wise data)
for(let r:number = 1 ; r <=totalRows ; r++){
    for(let c:number = 1; c<= totalColumns ; c++){
        const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${r}]/td[${c}]`);
        console.log(`Row ${r}  column ${c} Value is : ${await cell.textContent()}`);
    }
}


});

//Select the Data Access Mode. 
async function selectDataAccessMode(page: any, option: string):Promise<void> {
    
    //Locate the radio button
    const radiobutton = await page.locator(`input[value="$(option)"]`);

    //click on the radio button
    await radiobutton.click();

}




    

