/// <reference types="google-apps-script" />
/// <reference types="google-apps-script" />
type Root = {
    getUi: () => GoogleAppsScript.Base.Ui;
};
export type Button = {
    name: string;
    value?: string;
    class?: string;
};
type HtmlOptions = {
    message: string;
    height?: number;
    buttons?: (Button | string)[];
    functionName?: string;
};
type RootlessOptions = HtmlOptions & {
    title: string;
};
type Options = RootlessOptions & {
    root: Root;
};
export type Callback = {
    functionName: string;
    args?: any[];
};
export type ResponseHandler = (response: string) => string | Callback | void;
export declare const showModal: (args_0: Options) => void;
export declare const showModeless: (args_0: Options) => void;
export declare const dialogClose: () => any;
export declare function getHtmlOutput({ message, buttons, height, functionName, }: HtmlOptions): GoogleAppsScript.HTML.HtmlOutput;
export declare const getHtml: (options: HtmlOptions) => string;
export declare function bindTo(root: Root): {
    new (): {};
    showModal: (options: RootlessOptions) => void;
    showModeless: (options: RootlessOptions) => void;
    getHtmlOutput: (options: HtmlOptions) => GoogleAppsScript.HTML.HtmlOutput;
    getHtml: (options: HtmlOptions) => string;
};
export {};
