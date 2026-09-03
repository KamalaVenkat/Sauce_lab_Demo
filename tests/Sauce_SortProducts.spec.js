import { test, expect } from '@playwright/test';
import { sauce_POM } from '../page/sauce_POM';


test('test', async ({ page }) => {

    const login = new sauce_POM(page)

    await login.gotologinpage()
    await login.login('visual_user', 'secret_sauce')

    //choosing Z to A option from sorting dropdown

    await page.locator('#header_container > div.header_secondary_container > div > span > select').selectOption('Name (Z to A)')

    //verify Z to A sort display
    await expect(page.locator('#item_3_title_link > div')).toBeVisible();
    await expect(page.locator('#item_4_title_link > div')).toBeVisible();
    await expect(page.locator('#item_0_title_link > div')).toBeVisible();
    await expect(page.locator('#item_1_title_link > div')).toBeVisible();
    await expect(page.locator('#item_5_title_link > div')).toBeVisible();
    await expect(page.locator('#item_2_title_link > div')).toBeVisible();

    //take a screenshot
    await page.screenshot({
        path: 'screenshots/full-page.png',
        fullPage: true
    });

    //choosing low to high sort option from dropdown
    await page.locator('#header_container > div.header_secondary_container > div > span > select').selectOption('Price (low to high)')
    
    //take a screenshot
    await page.screenshot({
        path: 'screenshots/full-page.png',
        fullPage: true
    });
});
