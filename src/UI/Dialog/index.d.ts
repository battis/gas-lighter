/// <reference types="google-apps-script" />
/// <reference types="google-apps-script" />
export type Root = {
    getUi: () => GoogleAppsScript.Base.Ui;
};
export type Button = {
    name: string;
    value?: string;
    class?: string;
};
export type BaseHtmlOptions = {
    message: string;
    height?: number;
    buttons?: (Button | string)[];
};
export type HtmlOptionsWithBackEndCallback = BaseHtmlOptions & {
    functionName?: string;
    handler?: never;
    script?: true;
};
export type HtmlOptionsWithHandler = BaseHtmlOptions & {
    functionName?: never;
    handler?: string;
    script?: true;
};
export type HtmlOptionsWithoutScript = BaseHtmlOptions & {
    functionName?: never;
    handler?: never;
    script: false;
};
export type HtmlOptions = HtmlOptionsWithHandler | HtmlOptionsWithBackEndCallback | HtmlOptionsWithoutScript;
export type RootlessOptions = HtmlOptions & {
    title: string;
};
export type Options = RootlessOptions & {
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
export declare function getHtmlOutput({ message, buttons, height, functionName, handler, script, }: HtmlOptions): GoogleAppsScript.HTML.HtmlOutput;
export declare const getHtml: (options: HtmlOptions) => string;
export type DialogBinding<T> = {
    showModal: (options: RootlessOptions) => void;
    showModeless: (options: RootlessOptions) => void;
    getHtmlOutput: (options: HtmlOptions) => GoogleAppsScript.HTML.HtmlOutput;
};
export declare function bindTo<T>(root: T & Root): DialogBinding<T>;
