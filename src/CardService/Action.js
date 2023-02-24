"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
function stringify(parameters) {
    for (const key of Object.keys(parameters)) {
        if (typeof parameters[key] != 'string') {
            parameters[key] = JSON.stringify(parameters[key]);
        }
    }
    return parameters || {};
}
function create({ functionName, parameters = null, }) {
    const action = CardService.newAction().setFunctionName(functionName);
    if (parameters) {
        return action.setParameters(stringify(parameters));
    }
    return action;
}
exports.create = create;
