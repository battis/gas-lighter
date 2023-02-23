"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.stringify = void 0;
function stringify(parameters) {
    for (const key of Object.keys(parameters)) {
        if (typeof parameters[key] != 'string') {
            parameters[key] = JSON.stringify(parameters[key]);
        }
    }
    return parameters || {};
}
exports.stringify = stringify;
// FIXME fix typing to reflect requirement for functionName or openLink, etc.
function create({ functionName, parameters = null, }) {
    const action = CardService.newAction().setFunctionName(functionName);
    if (parameters) {
        return action.setParameters(stringify(parameters));
    }
    return action;
}
exports.create = create;
