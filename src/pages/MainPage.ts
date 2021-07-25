import { Page } from '@playwright/test';
import { UIElement } from '../../src/components/UIElement';
import { TextElement } from '../../src/components/TextElement';
import { SignUpPage } from './SignUpPage';
import { Button } from '../../src/components/Button';

export class MainPage {
    private readonly mainText: string = '.landing-main-block-container h1';
    private readonly dateInput: string = 'input[placeholder="Date"]';
    private readonly serachContainer: string = "div[data-chunk='searchForm']";
    private readonly signUpButton: string = "div[data-chunk='header'] a[href='/signup/']";
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async pageLoaded(): Promise<MainPage> {
        await this.page.waitForSelector(this.serachContainer);
        return this;
    }

    public async isMainText(expectedText: string): Promise<boolean> {
        const textelement: string = await new TextElement(this.page, this.mainText).getElementText();
        return textelement === expectedText;
    }

    public async isDateInputVisible(): Promise<boolean> {
        const uiElement: boolean = await new UIElement(this.page, this.dateInput).isElementDisplayed();
        return uiElement;
    }

    public async clickToHeaderSignUp(): Promise<SignUpPage> {
        await new Button(this.page, this.signUpButton).clickButton();
        return new SignUpPage(this.page);
    }
}
