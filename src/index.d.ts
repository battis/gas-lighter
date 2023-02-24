import * as CacheService from './CacheService';
import * as CardService from './CardService';
import * as DriveApp from './DriveApp';
import * as Globals from './Globals';
import * as HtmlService from './HtmlService';
import * as PropertiesService from './PropertiesService';
import * as SpreadsheetApp from './SpreadsheetApp';
import * as UI from './UI';
declare const g: {
    CacheService: typeof CacheService;
    CardService: typeof CardService;
    DriveApp: typeof DriveApp;
    Globals: typeof Globals;
    HtmlService: typeof HtmlService;
    PropertiesService: typeof PropertiesService;
    SpreadsheetApp: typeof SpreadsheetApp;
    UI: typeof UI;
};
export default g;
/** @deprecated */
export declare const Helper: {
    DriveApp: typeof DriveApp;
    SpreadsheetApp: typeof SpreadsheetApp;
};
/** @deprecated */
export declare const Terse: {
    CacheService: typeof CacheService;
    CardService: typeof CardService;
    HtmlService: typeof HtmlService;
    PropertiesService: typeof PropertiesService;
    SpreadsheetApp: typeof SpreadsheetApp;
};
