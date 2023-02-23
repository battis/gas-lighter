"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSheetDisplayValues = exports.set = exports.replaceAllWithDisplayValues = exports.replaceWithDisplayValues = void 0;
function replaceWithDisplayValues(range) {
    range.setValues(range.getDisplayValues());
}
exports.replaceWithDisplayValues = replaceWithDisplayValues;
function replaceAllWithDisplayValues(sheet) {
    replaceWithDisplayValues(sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()));
}
exports.replaceAllWithDisplayValues = replaceAllWithDisplayValues;
function set(sheet, a1notation, value) {
    const range = sheet.getRange(a1notation);
    if (Array.isArray(value)) {
        if (!Array.isArray(value[0])) {
            value = [value];
        }
        range.setValues(value);
    }
    else {
        range.offset(0, 0, 1, 1).setValue(value);
    }
}
exports.set = set;
const getSheetDisplayValues = (sheet) => sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .getDisplayValues();
exports.getSheetDisplayValues = getSheetDisplayValues;
