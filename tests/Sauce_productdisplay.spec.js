import { test, expect } from '@playwright/test';
import { sauce_POM } from '../page/sauce_POM';


test('test', async ({ page }) => {

    const login = new sauce_POM(page)

    await login.gotologinpage()
    await login.login('visual_user', 'secret_sauce')

    //verify the url
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    //verify the number of products
    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);

    //verify all products display/
    //always use locator->expect->tobevisible

    await expect(page.locator('#item_4_title_link > div')).toBeVisible();
    await expect(page.locator('#item_0_title_link > div')).toBeVisible();
    await expect(page.locator('#item_1_title_link > div')).toBeVisible();
    await expect(page.locator('#item_5_title_link > div')).toBeVisible();
    await expect(page.locator('#item_2_title_link > div')).toBeVisible();
    await expect(page.locator('#item_3_title_link > div')).toBeVisible();

    //take a screenshot
    await page.screenshot({
        path: 'screenshots/full-page.png',
        fullPage: true
    });


});