import { test, expect } from '@playwright/test';
import { MainPage } from '../../src/pages/MainPage';

test.describe('Main Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.poptop.uk.com');
    });

    test('should contain text into main container', async () => {
        const mainPage: MainPage = new MainPage();
        const name = await mainPage.isMainText('The Smartest Way To Plan Your Events');
        expect(name).toBeTruthy();
    });

    test('should contain date container', async ({ page }) => {
        const isDateInput: boolean = await page.isVisible('input[placeholder="Date"]');
        console.log(isDateInput);
        expect(isDateInput).toBeTruthy();
    });
});
