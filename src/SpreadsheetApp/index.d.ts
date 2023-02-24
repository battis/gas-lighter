/// <reference types="google-apps-script" />
/// <reference types="google-apps-script" />
import * as Dialog_module from '../UI/Dialog';
import * as DeveloperMetadata_module from './DeveloperMetadata';
import * as Function_module from './Function';
import * as Permission_module from './Permission';
import * as Protection_module from './Protection';
import * as Value_module from './Value';
declare namespace SpreadsheetApp_namespace {
    const Dialog: {
        new (): {};
        showModal: (options: Dialog_module.RootlessOptions) => void;
        showModeless: (options: Dialog_module.RootlessOptions) => void;
        getHtmlOutput: (options: Dialog_module.HtmlOptions) => GoogleAppsScript.HTML.HtmlOutput;
        getHtml: (options: Dialog_module.HtmlOptions) => string;
    };
    export import Function = Function_module;
    export import Permission = Permission_module;
    export import Value = Value_module;
    export import DeveloperMetadata = DeveloperMetadata_module;
    export import Protection = Protection_module;
}
export default SpreadsheetApp_namespace;
/** @deprecated */
export declare const addImportrangePermission: typeof Permission_module.addImportrangePermission;
/** @deprecated */
export declare const setValue: typeof Value_module.set;
/** @deprecated */
export declare const replaceWithDisplayValues: typeof Value_module.replaceWithDisplayValues;
/** @deprecated */
export declare const getSheetDisplayValues: (sheet: GoogleAppsScript.Spreadsheet.Sheet) => string[][];
/** @deprecated */
export declare const fcn: typeof Function_module.fcn;
/** @deprecated */
export declare const eq: typeof Function_module.eq;
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
