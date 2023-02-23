/// <reference types="google-apps-script" />
/// <reference types="google-apps-script" />
import * as D from '../UI/Dialog';
import * as F from './Function';
import * as P from './Permission';
import * as V from './Value';
export * as DeveloperMetadata from './DeveloperMetadata';
export * as Protection from './Protection';
export declare const Dialog: {
    new (): {};
    showModal: (options: {
        message: string;
        height?: number;
        buttons?: (string | D.Button)[];
        functionName?: string;
    } & {
        title: string;
    }) => void;
    showModeless: (options: {
        message: string;
        height?: number;
        buttons?: (string | D.Button)[];
        functionName?: string;
    } & {
        title: string;
    }) => void;
    getHtmlOutput: (options: {
        message: string;
        height?: number;
        buttons?: (string | D.Button)[];
        functionName?: string;
    }) => GoogleAppsScript.HTML.HtmlOutput;
    getHtml: (options: {
        message: string;
        height?: number;
        buttons?: (string | D.Button)[];
        functionName?: string;
    }) => string;
};
/** @deprecated */
export declare const addImportrangePermission: typeof P.addImportrangePermission;
export declare const Permission: typeof P;
/** @deprecated */
export declare const setValue: typeof V.set;
/** @deprecated */
export declare const replaceWithDisplayValues: typeof V.replaceWithDisplayValues;
/** @deprecated */
export declare const getSheetDisplayValues: (sheet: GoogleAppsScript.Spreadsheet.Sheet) => string[][];
export declare const Value: typeof V;
/** @deprecated */
export declare const fcn: typeof F.fcn;
/** @deprecated */
export declare const eq: typeof F.eq;
/** @deprecated */
export declare const CHAR: (...args: any[]) => string;
/** @deprecated */
export declare const FILTER: (...args: any[]) => string;
/** @deprecated */
export declare const IF: (...args: any[]) => string;
/** @deprecated */
export declare const IFNA: (...args: any[]) => string;
/** @deprecated */
export declare const INDEX: (...args: any[]) => string;
/** @deprecated */
export declare const JOIN: (...args: any[]) => string;
/** @deprecated */
export declare const MATCH: (...args: any[]) => string;
/** @deprecated */
export declare const SORT: (...args: any[]) => string;
/** @deprecated */
export declare const UNIQUE: (...args: any[]) => string;
export declare const Function: typeof F;
