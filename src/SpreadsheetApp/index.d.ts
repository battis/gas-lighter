/// <reference types="google-apps-script" />
import * as Dialog_module from '../UI/Dialog';
import * as DeveloperMetadata_module from './DeveloperMetadata';
import * as Function_module from './Function';
import * as Permission_module from './Permission';
import * as Protection_module from './Protection';
import * as Range_module from './Range';
import * as Value_module from './Value';
declare namespace SpreadsheetApp_namespace {
    export import DeveloperMetadata = DeveloperMetadata_module;
    const Dialog: Dialog_module.DialogBinding<GoogleAppsScript.Spreadsheet.SpreadsheetApp>;
    export import Function = Function_module;
    export import Permission = Permission_module;
    export import Protection = Protection_module;
    export import Range = Range_module;
    export import Value = Value_module;
}
export default SpreadsheetApp_namespace;
