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
exports.Function = exports.UNIQUE = exports.SORT = exports.MATCH = exports.JOIN = exports.INDEX = exports.IFNA = exports.IF = exports.FILTER = exports.CHAR = exports.eq = exports.fcn = exports.Value = exports.getSheetDisplayValues = exports.replaceWithDisplayValues = exports.setValue = exports.Permission = exports.addImportrangePermission = exports.Dialog = exports.Protection = exports.DeveloperMetadata = void 0;
const D = __importStar(require("../UI/Dialog"));
const F = __importStar(require("./Function"));
const P = __importStar(require("./Permission"));
const V = __importStar(require("./Value"));
exports.DeveloperMetadata = __importStar(require("./DeveloperMetadata"));
exports.Protection = __importStar(require("./Protection"));
exports.Dialog = D.bindTo(SpreadsheetApp);
/** @deprecated */
exports.addImportrangePermission = P.addImportrangePermission;
exports.Permission = P;
/** @deprecated */
exports.setValue = V.set;
/** @deprecated */
exports.replaceWithDisplayValues = V.replaceWithDisplayValues;
/** @deprecated */
exports.getSheetDisplayValues = V.getSheetDisplayValues;
exports.Value = V;
/** @deprecated */
exports.fcn = F.fcn;
/** @deprecated */
exports.eq = F.eq;
/** @deprecated */
exports.CHAR = F.CHAR;
/** @deprecated */
exports.FILTER = F.FILTER;
/** @deprecated */
exports.IF = F.IF;
/** @deprecated */
exports.IFNA = F.IFNA;
/** @deprecated */
exports.INDEX = F.INDEX;
/** @deprecated */
exports.JOIN = F.JOIN;
/** @deprecated */
exports.MATCH = F.MATCH;
/** @deprecated */
exports.SORT = F.SORT;
/** @deprecated */
exports.UNIQUE = F.UNIQUE;
exports.Function = F;
