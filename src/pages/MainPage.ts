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
    private readonly header: string = "div[data-chunk='header']>div";
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async pageLoaded(): Promise<MainPage> {
        const searchForm = await this.page.$(this.serachContainer);
        await this.page.waitForSelector(this.serachContainer);
        await searchForm.scrollIntoViewIfNeeded();
        await searchForm.waitForElementState('stable');
        await this.page.waitForLoadState('domcontentloaded');

        const header = await this.page.waitForSelector(this.header);
        await header.waitForElementState('stable');
        await header.evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');
        });
        // console.log("!!!!! "+color);
        // await this.page.screenshot({
        //     path: `scr-${new Date()}.png`,
        // });
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
