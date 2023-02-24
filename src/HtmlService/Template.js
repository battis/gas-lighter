"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.include = exports.createTemplateFromFile = exports.createTemplate = void 0;
const lib_html_1 = __importDefault(require("./lib.html"));
const style_html_1 = __importDefault(require("./style.html"));
function createTemplate(html, data = {}) {
    const template = HtmlService.createTemplate(html);
    template.data = data;
    return template.evaluate();
}
exports.createTemplate = createTemplate;
function createTemplateFromFile(filePath, data = {}) {
    let template;
    switch (filePath) {
        case 'lib':
            template = HtmlService.createTemplate(lib_html_1.default);
            break;
        case 'style':
            template = HtmlService.createTemplate(style_html_1.default);
            break;
        default:
            template = HtmlService.createTemplateFromFile(filePath);
    }
    template.data = data;
    return template.evaluate();
}
exports.createTemplateFromFile = createTemplateFromFile;
const include = (filePath, data) => createTemplateFromFile(filePath, data).getContent();
exports.include = include;
