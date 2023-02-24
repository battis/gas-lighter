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
exports.UNIQUE = exports.SORT = exports.MATCH = exports.JOIN = exports.INDEX = exports.IFNA = exports.IF = exports.FILTER = exports.CHAR = exports.eq = exports.fcn = exports.getSheetDisplayValues = exports.replaceWithDisplayValues = exports.setValue = exports.addImportrangePermission = void 0;
const Dialog_module = __importStar(require("../UI/Dialog"));
const DeveloperMetadata_module = __importStar(require("./DeveloperMetadata"));
const Function_module = __importStar(require("./Function"));
const Permission_module = __importStar(require("./Permission"));
const Protection_module = __importStar(require("./Protection"));
const Value_module = __importStar(require("./Value"));
var SpreadsheetApp_namespace;
(function (SpreadsheetApp_namespace) {
    SpreadsheetApp_namespace.Dialog = Dialog_module.bindTo(SpreadsheetApp);
    SpreadsheetApp_namespace.Function = Function_module;
    SpreadsheetApp_namespace.Permission = Permission_module;
    SpreadsheetApp_namespace.Value = Value_module;
    SpreadsheetApp_namespace.DeveloperMetadata = DeveloperMetadata_module;
    SpreadsheetApp_namespace.Protection = Protection_module;
})(SpreadsheetApp_namespace || (SpreadsheetApp_namespace = {}));
exports.default = SpreadsheetApp_namespace;
/** @deprecated */
exports.addImportrangePermission = Permission_module.addImportrangePermission;
/** @deprecated */
exports.setValue = Value_module.set;
/** @deprecated */
exports.replaceWithDisplayValues = Value_module.replaceWithDisplayValues;
/** @deprecated */
exports.getSheetDisplayValues = Value_module.getSheetDisplayValues;
/** @deprecated */
exports.fcn = Function_module.fcn;
/** @deprecated */
exports.eq = Function_module.eq;
/** @deprecated */
exports.CHAR = Function_module.CHAR;
/** @deprecated */
exports.FILTER = Function_module.FILTER;
/** @deprecated */
exports.IF = Function_module.IF;
/** @deprecated */
exports.IFNA = Function_module.IFNA;
/** @deprecated */
exports.INDEX = Function_module.INDEX;
/** @deprecated */
exports.JOIN = Function_module.JOIN;
/** @deprecated */
exports.MATCH = Function_module.MATCH;
/** @deprecated */
exports.SORT = Function_module.SORT;
/** @deprecated */
exports.UNIQUE = Function_module.UNIQUE;
