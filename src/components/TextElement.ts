import { Page } from '@playwright/test';
import { ITextElement } from './ITestElement';
import { UIElement } from './UIElement';

export class TextElement extends UIElement implements ITextElement {
    constructor(protected page: Page, protected selector: string) {
        super(page, selector);
        this.selector = selector;
    }

    public async getElementText(): Promise<string> {
        const actualElementText: string = await this.page.innerText(this.selector);
        return actualElementText;
    }
}
