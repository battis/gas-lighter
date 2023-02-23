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
exports.newCardSection = exports.newCardHeader = exports.create = void 0;
const Widget = __importStar(require("./Widget"));
function create({ name = null, header = null, sections = [], widgets = null, }) {
    let card = CardService.newCardBuilder();
    if (name !== null) {
        card = card.setName(name);
    }
    if (header !== null) {
        card = card.setHeader(newCardHeader(header));
    }
    sections.forEach((section) => (card = card.addSection(section)));
    if (widgets !== null) {
        card = card.addSection(newCardSection({ widgets }));
    }
    return card.build();
}
exports.create = create;
function newCardHeader(title) {
    return CardService.newCardHeader().setTitle(title);
}
exports.newCardHeader = newCardHeader;
function newCardSection({ header = null, widgets = [], collapsible = null, numUncollapsibleWidgets = 0, }) {
    let section = CardService.newCardSection();
    if (header) {
        section = section.setHeader(header);
    }
    if (collapsible !== null) {
        section = section
            .setCollapsible(collapsible)
            .setNumUncollapsibleWidgets(numUncollapsibleWidgets);
    }
    widgets.forEach((widget) => (section = section.addWidget(typeof widget == 'string' ? Widget.newTextParagraph(widget) : widget)));
    return section;
}
exports.newCardSection = newCardSection;
