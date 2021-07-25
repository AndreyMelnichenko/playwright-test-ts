export interface IElement {
    isElementDisplayed(): Promise<boolean> | boolean;
}
