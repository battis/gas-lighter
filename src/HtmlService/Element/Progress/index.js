"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindTo = exports.getHtmlOutput = exports.getProgress = exports.reset = exports.getHtml = exports.setHtml = exports.getComplete = exports.setComplete = exports.decrementMax = exports.incrementMax = exports.getMax = exports.setMax = exports.decrementValue = exports.incrementValue = exports.getValue = exports.setValue = exports.getStatus = exports.setStatus = void 0;
const CacheService_1 = require("../../../CacheService");
const Template_1 = require("../../Template");
const page_html_1 = __importDefault(require("./page.html"));
const progress_html_1 = __importDefault(require("./progress.html"));
function prefix(thread, token, delimiter = '.') {
    return ['battis', 'Terse', 'HtmlService', 'Progress', thread, token].join(delimiter);
}
function get(token, thread) {
    return (0, CacheService_1.getUserCache)(prefix(thread, token));
}
function put(token, thread, value) {
    return (0, CacheService_1.putUserCache)(prefix(thread, token), value);
}
// FIXME I don't think "remove" means what you think it means
function remove(token, thread) {
    return (0, CacheService_1.removeUserCache)(prefix(thread, token));
}
function putAndUpdate(token, thread, value) {
    put(token, thread, value);
    update(thread);
}
const setStatus = (thread, status) => putAndUpdate('status', thread, status);
exports.setStatus = setStatus;
const getStatus = (thread) => get('status', thread);
exports.getStatus = getStatus;
const setValue = (thread, value) => putAndUpdate('value', thread, value);
exports.setValue = setValue;
const getValue = (thread) => get('value', thread);
exports.getValue = getValue;
const incrementValue = (thread, increment = 1) => (0, exports.setValue)(thread, (0, exports.getValue)(thread) + increment);
exports.incrementValue = incrementValue;
const decrementValue = (thread, decrement = 1) => (0, exports.setValue)(thread, (0, exports.getValue)(thread) - decrement);
exports.decrementValue = decrementValue;
const setMax = (thread, max) => putAndUpdate('max', thread, max);
exports.setMax = setMax;
const getMax = (thread) => get('max', thread);
exports.getMax = getMax;
const incrementMax = (thread, increment = 1) => (0, exports.setMax)(thread, (0, exports.getMax)(thread) + increment);
exports.incrementMax = incrementMax;
const decrementMax = (thread, decrement = 1) => (0, exports.setMax)(thread, (0, exports.getMax)(thread) - decrement);
exports.decrementMax = decrementMax;
const setComplete = (thread, message) => put('complete', thread, message);
exports.setComplete = setComplete;
const getComplete = (thread) => get('complete', thread);
exports.getComplete = getComplete;
const setHtml = (thread, html) => put('html', thread, html);
exports.setHtml = setHtml;
const getHtml = (thread) => get('html', thread);
exports.getHtml = getHtml;
function reset(thread) {
    remove(thread, 'complete');
    remove(thread, 'status');
    (0, exports.setValue)(thread, 0);
}
exports.reset = reset;
const getProgress = (thread) => ({
    html: (0, exports.getHtml)(thread),
    complete: (0, exports.getComplete)(thread),
});
exports.getProgress = getProgress;
// TODO add indeterminate option
// TODO add timer display/estimate
function update(thread) {
    const value = (0, exports.getValue)(thread);
    const max = (0, exports.getMax)(thread);
    const status = (0, exports.getStatus)(thread) || '';
    (0, exports.setHtml)(thread, (0, Template_1.createTemplate)(progress_html_1.default, { value, max, status }).getContent());
}
const getHtmlOutput = (thread) => (0, Template_1.createTemplate)(page_html_1.default, { thread }).setHeight(100);
exports.getHtmlOutput = getHtmlOutput;
function bindTo(thread) {
    var _a;
    return _a = class {
        },
        _a.reset = reset.bind(null, thread),
        _a.getProgress = exports.getProgress.bind(null, thread),
        _a.setStatus = exports.setStatus.bind(null, thread),
        _a.getStatus = exports.getStatus.bind(null, thread),
        _a.setValue = exports.setValue.bind(null, thread),
        _a.getValue = exports.getValue.bind(null, thread),
        _a.incrementValue = exports.incrementValue.bind(null, thread),
        _a.decrementValue = exports.decrementValue.bind(null, thread),
        _a.setMax = exports.setMax.bind(null, thread),
        _a.getMax = exports.getMax.bind(null, thread),
        _a.incrementMax = exports.incrementMax.bind(null, thread),
        _a.decrementMax = exports.decrementMax.bind(null, thread),
        _a.setComplete = exports.setComplete.bind(null, thread),
        _a.getComplete = exports.getComplete.bind(null, thread),
        _a.getHtml = exports.getHtml.bind(null, thread),
        _a;
}
exports.bindTo = bindTo;
