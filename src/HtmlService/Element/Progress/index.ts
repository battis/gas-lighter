import {
    getUserCache,
    putUserCache,
    removeUserCache
} from '../../../CacheService';
import { createTemplate } from '../../Template';
import page from './page.html';
import progress from './progress.html';

function prefix(key: string, token: string, delimiter = '.') {
    return ['battis', 'Terse', 'HtmlService', 'Progress', key, token].join(
        delimiter
    );
}

function get(token: string, key: string) {
    return getUserCache(prefix(key, token));
}

function put(token: string, key: string, value: any) {
    return putUserCache(prefix(key, token), value);
}

// FIXME I don't think "remove" means what you think it means
function remove(token: string, key: string) {
    return removeUserCache(prefix(key, token));
}

function putAndUpdate(token: string, key: string, value: any) {
    put(token, key, value);
    update(key);
}

export const setStatus = putAndUpdate.bind(null, 'status');
export const getStatus = get.bind(null, 'status');

export const setValue = putAndUpdate.bind(null, 'value');
export const getValue = get.bind(null, 'value');
export const incrementValue = (key: string, increment = 1) =>
    setValue(key, getValue(key) + increment);
export const decrementValue = (key: string, decrement = 1) =>
    setValue(key, getValue(key) - decrement);

export const setMax = putAndUpdate.bind(null, 'max');
export const getMax = get.bind(null, 'max');

export const setComplete = put.bind(null, 'complete');
export const getComplete = get.bind(null, 'complete');

export const setHtml = put.bind(null, 'html');
export const getHtml = get.bind(null, 'html');

export function reset(key: string) {
    remove(key, 'complete');
    remove(key, 'status');
    setValue(key, 0);
}

export const getProgress = (key: string) => ({
    html: getHtml(key),
    complete: getComplete(key),
});

// TODO add indeterminate option
// TODO add timer display/estimate
function update(key: string) {
    const value = getValue(key);
    const max = getMax(key);
    const status = getStatus(key) || '';
    setHtml(key, createTemplate(progress, { value, max, status }));
}

export const getHtmlOutput = (thread: string) =>
    createTemplate(page, { thread }).setHeight(100);

export function bindTo(key: string) {
    return class {
        public static reset = reset.bind(null, key);
        public static getProgress = getProgress.bind(null, key);
        public static setStatus = setStatus.bind(null, key);
        public static getStatus = getStatus.bind(null, key);
        public static setValue = setValue.bind(null, key);
        public static getValue = getValue.bind(null, key);
        public static incrementValue = incrementValue.bind(null, key);
        public static decrementValue = decrementValue.bind(null, key);
        public static setMax = setMax.bind(null, key);
        public static getMax = getMax.bind(null, key);
        public static setComplete = setComplete.bind(null, key);
        public static getComplete = getComplete.bind(null, key);
        public static getHtml = getHtml.bind(null, key);
    };
}
/** @deprecated */
export const getInstance = bindTo;
