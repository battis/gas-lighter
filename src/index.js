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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terse = exports.Helper = void 0;
const CacheService_module = __importStar(require("./CacheService"));
const CardService_1 = __importDefault(require("./CardService"));
const DriveApp_1 = __importDefault(require("./DriveApp"));
const Globals_module = __importStar(require("./Globals"));
const HtmlService_1 = __importDefault(require("./HtmlService"));
const PropertiesService_module = __importStar(require("./PropertiesService"));
const SpreadsheetApp_1 = __importDefault(require("./SpreadsheetApp"));
const UI_1 = __importDefault(require("./UI"));
var g;
(function (g) {
    g.CacheService = CacheService_module;
    g.CardService = CardService_1.default;
    g.DriveApp = DriveApp_1.default;
    g.Globals = Globals_module;
    g.HtmlService = HtmlService_1.default;
    g.PropertiesService = PropertiesService_module;
    g.SpreadsheetApp = SpreadsheetApp_1.default;
    g.UI = UI_1.default;
})(g || (g = {}));
exports.default = g;
/** @deprecated */
var Helper;
(function (Helper) {
    Helper.DriveApp = DriveApp_1.default;
    Helper.SpreadsheetApp = SpreadsheetApp_1.default;
})(Helper = exports.Helper || (exports.Helper = {}));
/** @deprecated */
var Terse;
(function (Terse) {
    Terse.CacheService = CacheService_module;
    Terse.CardService = CardService_1.default;
    Terse.HtmlService = HtmlService_1.default;
    Terse.PropertiesService = PropertiesService_module;
    Terse.SpreadsheetApp = SpreadsheetApp_1.default;
})(Terse = exports.Terse || (exports.Terse = {}));
