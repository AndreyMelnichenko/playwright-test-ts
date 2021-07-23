import { test, expect } from '@playwright/test';

test.describe('Main Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.poptop.uk.com');
    });

    test('should contain text into main container', async ({ page }) => {
        const name = await page.innerText('.landing-main-block-container h1');
        expect(name).toBe('The Smartest Way To Plan Your Events');
    });

    test.only('should contain date container', async ({ page }) => {
        expect(await page.isVisible('input[placeholder="Date"]')).toBeTruthy();
    });
});