import { test, expect } from '@playwright/test';

test('CSS Selector Syntax 1', async ({ page }) => {

    //Navigate to the Google application 
    await page.goto('https://parabank.parasoft.com/');

    //Locate the Para Bank Logo 
    await page.locator('img[title="ParaBank"]');

    //Locate the text Experience the difference
    await page.locator('p.caption');

    //ancestor : ul[class="button"]
    //parent : li
    //target : a[href="index.htm"]

    // ancestor > parent > target
// ul[class="button"] > li > a[href="index.htm"]

    //Locate the Home icon using css loactor
    await page.locator('ul[class="button"] > li > a[href="index.htm"]');

    //Locate the 'Services' link using css locator
    await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');




});
