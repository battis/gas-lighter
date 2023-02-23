/// <reference types="google-apps-script" />
import * as Property from './shared/EncodeDecode';
export declare const getScriptProperty: (key: string, decoder?: Property.Decoder) => any;
export declare const getDocumentProperty: (key: string, decoder?: Property.Decoder) => any;
export declare const getUserProperty: (key: string, decoder?: Property.Decoder) => any;
export declare const setScriptProperty: (key: string, value: any, encoder?: Property.Encoder) => GoogleAppsScript.Properties.Properties;
export declare const setDocumentProperty: (key: string, value: any, encoder?: Property.Encoder) => GoogleAppsScript.Properties.Properties;
export declare const setUserProperty: (key: string, value: any, encoder?: Property.Encoder) => GoogleAppsScript.Properties.Properties;
export declare const deleteScriptProperty: (key: string) => GoogleAppsScript.Properties.Properties;
export declare const deleteDocumentProperty: (key: string) => GoogleAppsScript.Properties.Properties;
export declare const deleteUserProperty: (key: string) => GoogleAppsScript.Properties.Properties;
