export interface ITextElement {
    isElementDisplayed(selector: string): Promise<boolean> | boolean;
    getElementText(selector: string): Promise<string> | string;
}
