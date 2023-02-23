"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushCard = exports.replaceStack = void 0;
function replaceStack(card, url = null) {
    let action = CardService.newActionResponseBuilder().setNavigation(CardService.newNavigation().popToRoot().updateCard(card));
    if (url) {
        action = action.setOpenLink(CardService.newOpenLink().setUrl(url));
    }
    return action.build();
}
exports.replaceStack = replaceStack;
function pushCard(card, url = null) {
    let action = CardService.newActionResponseBuilder().setNavigation(CardService.newNavigation().pushCard(card));
    if (url) {
        action = action.setOpenLink(CardService.newOpenLink().setUrl(url));
    }
    return action.build();
}
exports.pushCard = pushCard;
