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
exports.newTextButton = exports.newDecordatedTexdt = exports.newTexdtParagraph = exports.pushCard = exports.replaceStack = exports.newCardSection = exports.newCardHeader = exports.newCard = exports.newAction = exports.stringify = void 0;
const Action_module = __importStar(require("./Action"));
const Card_module = __importStar(require("./Card"));
const Navigation_module = __importStar(require("./Navigation"));
const Widget_module = __importStar(require("./Widget"));
var CardService;
(function (CardService) {
    CardService.Action = Action_module;
    CardService.Card = Card_module;
    CardService.Navigation = Navigation_module;
    CardService.Widget = Widget_module;
})(CardService || (CardService = {}));
exports.default = CardService;
/** @deprecated */
exports.stringify = Action_module.stringify;
/** @deprecated */
exports.newAction = Action_module.create;
/** @deprecated */
exports.newCard = Card_module.create;
/** @deprecated */
exports.newCardHeader = Card_module.newCardHeader;
/** @deprecated */
exports.newCardSection = Card_module.newCardSection;
/** @deprecated */
exports.replaceStack = Navigation_module.replaceStack;
/** @deprecated */
exports.pushCard = Navigation_module.pushCard;
/** @deprecated */
exports.newTexdtParagraph = Widget_module.newTextParagraph;
/** @deprecated */
exports.newDecordatedTexdt = Widget_module.newDecoratedText;
/** @deprecated */
exports.newTextButton = Widget_module.newTextButton;
