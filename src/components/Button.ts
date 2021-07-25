import { Page } from '@playwright/test';
import { IButton } from './IButton';

export class Button implements IButton {
    constructor(protected page: Page, protected selector: string) {
        this.selector = selector;
    }

    public async clickButton(): Promise<void> {
        await this.page.waitForSelector(this.selector);
        const button = await this.page.$(this.selector);
        await button.focus();
        await this.page.click(this.selector);
    }

    idEnabled(): boolean | Promise<boolean> {
        return false;
    }

    getText(): string | Promise<string> {
        return 'Method not implemented.';
    }
}
