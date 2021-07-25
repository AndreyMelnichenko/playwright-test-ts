import { Page } from '@playwright/test';

export class SignUpPage {
    private page: Page;
    private readonly signUpForm: string = '.singup-container';
    private readonly signUpButton: string = this.signUpForm + " button[type='submit']";
    private readonly signUpSecondButton: string = '.second-cta button';

    constructor(page: Page) {
        this.page = page;
    }

    public async pageLoaded(): Promise<SignUpPage> {
        await this.page.waitForSelector(this.signUpForm, { state: 'hidden' });
        await (await this.page.waitForSelector(this.signUpForm)).focus();
        await (await this.page.waitForSelector(this.signUpButton)).focus();
        await (await this.page.waitForSelector(this.signUpSecondButton)).focus();
        return this;
    }
}
