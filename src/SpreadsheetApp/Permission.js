"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImportrangePermission = void 0;
/**
 * Undocumented permissions API call
 * @see https://stackoverflow.com/a/68498535
 */
function addImportrangePermission(targetSpreadsheet, sourceSpreadsheet) {
    UrlFetchApp.fetch(`https://docs.google.com/spreadsheets/d/${targetSpreadsheet.getId()}/externaldata/addimportrangepermissions?donorDocId=${sourceSpreadsheet.getId()}`, {
        method: 'post',
        headers: {
            Authorization: `Bearer ${ScriptApp.getOAuthToken()}`,
        },
        muteHttpExceptions: true,
    });
}
exports.addImportrangePermission = addImportrangePermission;
