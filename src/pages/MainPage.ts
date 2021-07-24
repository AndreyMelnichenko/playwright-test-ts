import { Page } from '@playwright/test';
import { TextElement } from '../../src/components/TextElement';

export class MainPage {
    private readonly mainText: string = '.landing-main-block-container h1';
    private readonly page: Page;

    public async isMainText(expectedText: string): Promise<boolean> {
        const textelement: string = await new TextElement(this.page, this.mainText).getElementText(this.mainText);
        return textelement === expectedText;
    }
}
