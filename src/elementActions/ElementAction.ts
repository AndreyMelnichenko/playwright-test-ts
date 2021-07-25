import { Page } from '@playwright/test';

export class ElementAction {
    public static async waitForElemetVisible(page: Page, selector: string): Promise<void> {
        await page.waitForSelector(selector, { state: 'attached' });
        await (await page.$(selector)).scrollIntoViewIfNeeded();
    }
}
