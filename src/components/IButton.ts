export interface IButton {
    clickButton(): Promise<void> | void;
    idEnabled(): Promise<boolean> | boolean;
    getText(): Promise<string> | string;
}
