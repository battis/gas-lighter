"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const HtmlService_1 = __importDefault(require("./HtmlService"));
const UI_1 = __importDefault(require("./UI"));
// FIXME won't work without improvements in gas-webpack-plugin
// TODO some sort of fancy filtering
function register() {
    global.include = HtmlService_1.default.include;
    global.getProgress = HtmlService_1.default.Element.Progress.getProgress;
    global.dialogClose = UI_1.default.Dialog.dialogClose;
}
exports.register = register;
