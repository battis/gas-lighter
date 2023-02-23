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
exports.newTextButton = exports.newDecoratedText = exports.newTextParagraph = void 0;
const Action = __importStar(require("./Action"));
function newTextParagraph(text) {
    return CardService.newTextParagraph().setText(text);
}
exports.newTextParagraph = newTextParagraph;
function newDecoratedText({ topLabel = null, text = null, bottomLabel = null, wrap = true, }) {
    let decoratedText = CardService.newDecoratedText().setText(text || ' ');
    if (topLabel) {
        decoratedText = decoratedText.setTopLabel(topLabel);
    }
    if (text) {
        decoratedText = decoratedText.setWrapText(wrap);
    }
    if (bottomLabel) {
        decoratedText = decoratedText.setBottomLabel(bottomLabel);
    }
    return decoratedText;
}
exports.newDecoratedText = newDecoratedText;
function newTextButton({ text, functionName, parameters = null, }) {
    return CardService.newTextButton()
        .setText(text)
        .setOnClickAction(Action.create({ functionName, parameters }));
}
exports.newTextButton = newTextButton;
