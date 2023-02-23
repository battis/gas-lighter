"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNIQUE = exports.SORT = exports.MATCH = exports.JOIN = exports.INDEX = exports.IFNA = exports.IF = exports.FILTER = exports.CHAR = exports.eq = exports.fcn = void 0;
function fcn(name, ...args) {
    return `${name}(${args.join(',')})`;
}
exports.fcn = fcn;
function eq(a, b, stringify = true) {
    return `${a}=${stringify ? JSON.stringify(b) : b}`;
}
exports.eq = eq;
exports.CHAR = fcn.bind(null, 'CHAR');
exports.FILTER = fcn.bind(null, 'FILTER');
exports.IF = fcn.bind(null, 'IF');
exports.IFNA = fcn.bind(null, 'IFNA');
exports.INDEX = fcn.bind(null, 'INDEX');
exports.JOIN = fcn.bind(null, 'JOIN');
exports.MATCH = fcn.bind(null, 'MATCH');
exports.SORT = fcn.bind(null, 'SORT');
exports.UNIQUE = fcn.bind(null, 'UNIQUE');
