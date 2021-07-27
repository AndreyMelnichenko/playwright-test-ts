import { Page } from '@playwright/test';
import { ElementAction } from '../../src/elementActions/ElementAction';

export class SignUpPage {
    private page: Page;
    private readonly signUpForm: string = '.singup-container';
    private readonly signUpButton: string = this.signUpForm + " button[type='submit']";
    private readonly signUpSecondButton: string = '.second-cta button';

    constructor(page: Page) {
        this.page = page;
    }

    public async pageLoaded(): Promise<SignUpPage> {
        await ElementAction.waitForUrl(this.page, '**/signup/');
        await ElementAction.waitForElemetVisible(this.page, this.signUpForm);
        await ElementAction.waitForElemetVisible(this.page, this.signUpButton);
        await ElementAction.waitForElemetVisible(this.page, this.signUpSecondButton);
        return this;
    }
}
