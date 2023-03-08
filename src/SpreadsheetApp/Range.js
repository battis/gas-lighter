"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntireSheet = void 0;
const getEntireSheet = (sheet) => sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
exports.getEntireSheet = getEntireSheet;
