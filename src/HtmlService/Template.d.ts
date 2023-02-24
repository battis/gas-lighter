/// <reference types="google-apps-script" />
export declare function createTemplate(html: string, data?: {}): GoogleAppsScript.HTML.HtmlOutput;
export declare function createTemplateFromFile(filePath: string, data?: {}): GoogleAppsScript.HTML.HtmlOutput;
export declare const include: (filePath: string, data?: object) => string;
