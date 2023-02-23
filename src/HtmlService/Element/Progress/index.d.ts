/// <reference types="google-apps-script" />
export declare const setStatus: (key: string, value: any) => void;
export declare const getStatus: (key: string) => any;
export declare const setValue: (key: string, value: any) => void;
export declare const getValue: (key: string) => any;
export declare const incrementValue: (key: string, increment?: number) => void;
export declare const decrementValue: (key: string, decrement?: number) => void;
export declare const setMax: (key: string, value: any) => void;
export declare const getMax: (key: string) => any;
export declare const setComplete: (key: string, value: any) => void;
export declare const getComplete: (key: string) => any;
export declare const setHtml: (key: string, value: any) => void;
export declare const getHtml: (key: string) => any;
export declare function reset(key: string): void;
export declare const getProgress: (key: string) => {
    html: any;
    complete: any;
};
export declare const getHtmlOutput: (thread: string) => GoogleAppsScript.HTML.HtmlOutput;
export declare function bindTo(key: string): {
    new (): {};
    reset: () => void;
    getProgress: () => {
        html: any;
        complete: any;
    };
    setStatus: (value: any) => void;
    getStatus: () => any;
    setValue: (value: any) => void;
    getValue: () => any;
    incrementValue: (increment?: number) => void;
    decrementValue: (decrement?: number) => void;
    setMax: (value: any) => void;
    getMax: () => any;
    setComplete: (value: any) => void;
    getComplete: () => any;
    getHtml: () => any;
};
/** @deprecated */
export declare const getInstance: typeof bindTo;
