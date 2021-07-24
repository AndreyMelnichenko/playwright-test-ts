import { Page } from '@playwright/test';
import { ITextElement } from './ITestElement';

export class TextElement implements ITextElement {
    constructor(private page: Page, private selector: string) {
        this.selector = selector;
    }

    public async isElementDisplayed(selector: string): Promise<boolean> {
        const isElementDisplayed: boolean = await this.page.isVisible(selector);
        return isElementDisplayed;
    }

    public async getElementText(selector: string): Promise<string> {
        const actualElementText: string = await this.page.innerText(selector);
        return actualElementText;
    }
}
