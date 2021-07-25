import { test, expect } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { MainPage } from '../../src/pages/MainPage';

test.describe('Main Page', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.poptop.uk.com');
        mainPage = new MainPage(page);
        mainPage.pageLoaded();
    });

    test('should contain text into main container', async () => {
        const name = await mainPage.isMainText('The Smartest Way To Plan Your Events');
        expect(name).toBeTruthy();
    });

    test('should contain date container', async () => {
        const isDateVisible: boolean = await mainPage.isDateInputVisible();
        console.log(isDateVisible);
        expect(isDateVisible).toBeTruthy();
    });

    test.only('sign button should follow to SignUp page', async () => {
        const signUpPage: SignUpPage = await mainPage.clickToHeaderSignUp();
        signUpPage.pageLoaded();
    });
});
