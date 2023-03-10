/// <reference types="google-apps-script" />
type Completion = string | true | {
    html: string;
};
export declare const setStatus: (thread: string, status: string) => void;
export declare const getStatus: (thread: string) => any;
export declare const setValue: (thread: string, value: number) => void;
export declare const getValue: (thread: string) => any;
export declare const incrementValue: (thread: string, increment?: number) => void;
export declare const decrementValue: (thread: string, decrement?: number) => void;
export declare const setMax: (thread: string, max: number) => void;
export declare const getMax: (thread: string) => any;
export declare const incrementMax: (thread: string, increment?: number) => void;
export declare const decrementMax: (thread: string, decrement?: number) => void;
export declare const setComplete: (thread: string, completion: Completion) => void;
export declare const getComplete: (thread: string) => any;
export declare const setHtml: (thread: string, html: string) => void;
export declare const getHtml: (thread: string) => any;
export declare function reset(thread: string): void;
export declare const getProgress: (thread: string) => {
    html: any;
    complete: any;
};
export declare const getHtmlOutput: (thread: string) => GoogleAppsScript.HTML.HtmlOutput;
export type ProgressBinding = {
    reset: () => void;
    getProgress: () => {
        html: string;
        complete: string;
    };
    setStatus: (status: string) => void;
    getStatus: () => string;
    setValue: (value: number) => void;
    getValue: () => number;
    incrementValue: () => void;
    decrementValue: () => void;
    setMax: (max: number) => void;
    getMax: () => number;
    setComplete: (message: string) => void;
    getComplete: () => string;
    getHtml: () => string;
};
export declare function bindTo(thread: string): ProgressBinding;
export {};
