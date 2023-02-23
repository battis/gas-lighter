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
exports.include = exports.createTemplateFromFile = exports.createTemplate = exports.Element = void 0;
exports.Element = __importStar(require("./Element"));
const lib_html_1 = __importDefault(require("./lib.html"));
const style_html_1 = __importDefault(require("./style.html"));
/**
  ### `app.ts`
```ts
    import { Terse } from '@battis/gas-lighter';

    global.include = Terse.HtmlService.include;
    ```

    ### `view.html`
```html
<html>
  <head>
    <?!= include('stylesheet'); ?>
  </head>
  <body>
    <div>Foo</div>
    <?!= include ('frontend'); ?>
  </body>
</html>
```

     */
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
