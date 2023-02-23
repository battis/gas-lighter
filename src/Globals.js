"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const HtmlService_1 = require("./HtmlService");
const Progress_1 = require("./HtmlService/Element/Progress");
const Dialog_1 = require("./UI/Dialog");
// FIXME won't work without improvements in gas-webpack-plugin
// TODO some sort of fancy filtering
function register() {
    global.include = HtmlService_1.include;
    global.getProgress = Progress_1.getProgress;
    global.dialogClose = Dialog_1.dialogClose;
}
exports.register = register;
