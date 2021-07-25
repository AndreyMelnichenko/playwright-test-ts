import { test, expect } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { MainPage } from '../../src/pages/MainPage';

test.describe('Main Page', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        mainPage = new MainPage(page);
        await mainPage.pageLoaded();
    });

    test('should contain text into main container @mainPage', async () => {
        const name = await mainPage.isMainText('The Smartest Way To Plan Your Events');
        expect(name).toBeTruthy();
    });

    test('should contain date container @mainPage', async () => {
        const isDateVisible: boolean = await mainPage.isDateInputVisible();
        expect(isDateVisible).toBeTruthy();
    });

    test('should not contain date container @mainPage', async () => {
        const isDateVisible: boolean = await mainPage.isDateInputVisible();
        expect(!isDateVisible).toBeTruthy();
    });

    test('sign button should follow to SignUp page', async () => {
        const signUpPage: SignUpPage = await mainPage.clickToHeaderSignUp();
        await signUpPage.pageLoaded();
    });
});
