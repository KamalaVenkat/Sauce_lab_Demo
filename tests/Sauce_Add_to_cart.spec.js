import { test, expect } from '@playwright/test';
import { sauce_POM } from '../page/sauce_POM';

test('add Sauce Labs Fleece Jacket to the cart', async ({ page }) => {
    const login = new sauce_POM(page);

    await login.gotologinpage();
    await login.login('visual_user', 'secret_sauce');

    const fleeceJacket = page.locator('.inventory_item').filter({
        hasText: 'Sauce Labs Fleece Jacket'
    });

    await expect(fleeceJacket).toBeVisible();
    await fleeceJacket.getByRole('button', { name: 'Add to cart' }).click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

