export interface ITextElement {
    getElementText(selector: string): Promise<string> | string;
}
