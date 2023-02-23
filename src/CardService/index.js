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
exports.newTextButton = exports.newDecordatedTexdt = exports.newTexdtParagraph = exports.pushCard = exports.replaceStack = exports.newCardSection = exports.newCardHeader = exports.newCard = exports.newAction = exports.stringify = exports.Widget = exports.Navigation = exports.Card = exports.Action = void 0;
const A = __importStar(require("./Action"));
const C = __importStar(require("./Card"));
const N = __importStar(require("./Navigation"));
const W = __importStar(require("./Widget"));
exports.Action = A;
exports.Card = C;
exports.Navigation = N;
exports.Widget = W;
/** @deprecated */
exports.stringify = A.stringify;
/** @deprecated */
exports.newAction = A.create;
/** @deprecated */
exports.newCard = C.create;
/** @deprecated */
exports.newCardHeader = C.newCardHeader;
/** @deprecated */
exports.newCardSection = C.newCardSection;
/** @deprecated */
exports.replaceStack = N.replaceStack;
/** @deprecated */
exports.pushCard = N.pushCard;
/** @deprecated */
exports.newTexdtParagraph = W.newTextParagraph;
/** @deprecated */
exports.newDecordatedTexdt = W.newDecoratedText;
/** @deprecated */
exports.newTextButton = W.newTextButton;
