"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearEditors = void 0;
function clearEditors(protection) {
    protection.addEditor(Session.getEffectiveUser());
    protection.removeEditors(protection.getEditors());
    if (protection.canDomainEdit()) {
        protection.setDomainEdit(false);
    }
}
exports.clearEditors = clearEditors;
