import { Page } from '@playwright/test';
import { IElement } from './IElement';

export class UIElement implements IElement {
    constructor(protected page: Page, protected selector: string) {
        this.selector = selector;
    }

    public async isElementDisplayed(): Promise<boolean> {
        await this.page.waitForSelector(this.selector);
        const isElementDisplayed: boolean = await this.page.isVisible(this.selector);
        return isElementDisplayed;
    }
}
