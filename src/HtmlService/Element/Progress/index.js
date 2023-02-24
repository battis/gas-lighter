"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstance = exports.bindTo = exports.getHtmlOutput = exports.getProgress = exports.reset = exports.getHtml = exports.setHtml = exports.getComplete = exports.setComplete = exports.getMax = exports.setMax = exports.decrementValue = exports.incrementValue = exports.getValue = exports.setValue = exports.getStatus = exports.setStatus = void 0;
const CacheService_1 = require("../../../CacheService");
const Template_1 = require("../../Template");
const page_html_1 = __importDefault(require("./page.html"));
const progress_html_1 = __importDefault(require("./progress.html"));
function prefix(key, token, delimiter = '.') {
    return ['battis', 'Terse', 'HtmlService', 'Progress', key, token].join(delimiter);
}
function get(token, key) {
    return (0, CacheService_1.getUserCache)(prefix(key, token));
}
function put(token, key, value) {
    return (0, CacheService_1.putUserCache)(prefix(key, token), value);
}
// FIXME I don't think "remove" means what you think it means
function remove(token, key) {
    return (0, CacheService_1.removeUserCache)(prefix(key, token));
}
function putAndUpdate(token, key, value) {
    put(token, key, value);
    update(key);
}
exports.setStatus = putAndUpdate.bind(null, 'status');
exports.getStatus = get.bind(null, 'status');
exports.setValue = putAndUpdate.bind(null, 'value');
exports.getValue = get.bind(null, 'value');
const incrementValue = (key, increment = 1) => (0, exports.setValue)(key, (0, exports.getValue)(key) + increment);
exports.incrementValue = incrementValue;
const decrementValue = (key, decrement = 1) => (0, exports.setValue)(key, (0, exports.getValue)(key) - decrement);
exports.decrementValue = decrementValue;
exports.setMax = putAndUpdate.bind(null, 'max');
exports.getMax = get.bind(null, 'max');
exports.setComplete = put.bind(null, 'complete');
exports.getComplete = get.bind(null, 'complete');
exports.setHtml = put.bind(null, 'html');
exports.getHtml = get.bind(null, 'html');
function reset(key) {
    remove(key, 'complete');
    remove(key, 'status');
    (0, exports.setValue)(key, 0);
}
exports.reset = reset;
const getProgress = (key) => ({
    html: (0, exports.getHtml)(key),
    complete: (0, exports.getComplete)(key),
});
exports.getProgress = getProgress;
// TODO add indeterminate option
// TODO add timer display/estimate
function update(key) {
    const value = (0, exports.getValue)(key);
    const max = (0, exports.getMax)(key);
    const status = (0, exports.getStatus)(key) || '';
    (0, exports.setHtml)(key, (0, Template_1.createTemplate)(progress_html_1.default, { value, max, status }));
}
const getHtmlOutput = (thread) => (0, Template_1.createTemplate)(page_html_1.default, { thread }).setHeight(100);
exports.getHtmlOutput = getHtmlOutput;
function bindTo(key) {
    var _a;
    return _a = class {
        },
        _a.reset = reset.bind(null, key),
        _a.getProgress = exports.getProgress.bind(null, key),
        _a.setStatus = exports.setStatus.bind(null, key),
        _a.getStatus = exports.getStatus.bind(null, key),
        _a.setValue = exports.setValue.bind(null, key),
        _a.getValue = exports.getValue.bind(null, key),
        _a.incrementValue = exports.incrementValue.bind(null, key),
        _a.decrementValue = exports.decrementValue.bind(null, key),
        _a.setMax = exports.setMax.bind(null, key),
        _a.getMax = exports.getMax.bind(null, key),
        _a.setComplete = exports.setComplete.bind(null, key),
        _a.getComplete = exports.getComplete.bind(null, key),
        _a.getHtml = exports.getHtml.bind(null, key),
        _a;
}
exports.bindTo = bindTo;
/** @deprecated */
exports.getInstance = bindTo;
