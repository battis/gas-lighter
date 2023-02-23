"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terse = exports.Helper = exports.UI = exports.SpreadsheetApp = exports.PropertiesService = exports.HtmlService = exports.Globals = exports.DriveApp = exports.CardService = exports.CacheService = void 0;
exports.CacheService = __importStar(require("./CacheService"));
exports.CardService = __importStar(require("./CardService"));
exports.DriveApp = __importStar(require("./DriveApp"));
exports.Globals = __importStar(require("./Globals"));
exports.HtmlService = __importStar(require("./HtmlService"));
exports.PropertiesService = __importStar(require("./PropertiesService"));
exports.SpreadsheetApp = __importStar(require("./SpreadsheetApp"));
exports.UI = __importStar(require("./UI"));
/** @deprecated */
exports.Helper = {
    DriveApp,
    SpreadsheetApp,
};
/** @deprecated */
exports.Terse = {
    CacheService,
    CardService,
    HtmlService,
    PropertiesService,
    SpreadsheetApp,
};
