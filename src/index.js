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
exports.Terse = exports.Helper = void 0;
const CacheService = __importStar(require("./CacheService"));
const CardService = __importStar(require("./CardService"));
const DriveApp = __importStar(require("./DriveApp"));
const Globals = __importStar(require("./Globals"));
const HtmlService = __importStar(require("./HtmlService"));
const PropertiesService = __importStar(require("./PropertiesService"));
const SpreadsheetApp = __importStar(require("./SpreadsheetApp"));
const UI = __importStar(require("./UI"));
const g = {
    CacheService,
    CardService,
    DriveApp,
    Globals,
    HtmlService,
    PropertiesService,
    SpreadsheetApp,
    UI,
};
exports.default = g;
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
