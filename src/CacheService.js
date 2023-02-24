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
exports.removeUserCache = exports.removeDocumentCache = exports.removeScriptCache = exports.putUserCache = exports.putDocumentCache = exports.putScriptCache = exports.getUserCache = exports.getDocumentCache = exports.getScriptCache = exports.Cache = void 0;
const Cache_module = __importStar(require("./shared/EncodeDecode"));
exports.Cache = Cache_module;
function getCache(cache, key, decoder) {
    return exports.Cache.decodeWith(decoder, cache().get(key));
}
const getScriptCache = (key, decoder = JSON.parse) => getCache(CacheService.getScriptCache, key, decoder);
exports.getScriptCache = getScriptCache;
const getDocumentCache = (key, decoder = JSON.parse) => getCache(CacheService.getDocumentCache, key, decoder);
exports.getDocumentCache = getDocumentCache;
const getUserCache = (key, decoder = JSON.parse) => getCache(CacheService.getUserCache, key, decoder);
exports.getUserCache = getUserCache;
function putCache(cache, key, value, encoder = JSON.stringify, expirationInSeconds = 600) {
    return cache().put(key, exports.Cache.encodeWith(encoder, value), expirationInSeconds);
}
const putScriptCache = (key, value, encoder = JSON.stringify, expirationInSeconds = 600) => putCache(CacheService.getScriptCache, key, value, encoder, expirationInSeconds);
exports.putScriptCache = putScriptCache;
const putDocumentCache = (key, value, encoder = JSON.stringify, expirationInSeconds = 600) => putCache(CacheService.getDocumentCache, key, value, encoder, expirationInSeconds);
exports.putDocumentCache = putDocumentCache;
const putUserCache = (key, value, encoder = JSON.stringify, expirationInSeconds = 600) => putCache(CacheService.getUserCache, key, value, encoder, expirationInSeconds);
exports.putUserCache = putUserCache;
function removeCache(cache, key) {
    const c = cache();
    c.put(key, null); // FIXME experience suggests that caches don't get removed
    return c.remove(key);
}
const removeScriptCache = (key) => removeCache(CacheService.getScriptCache, key);
exports.removeScriptCache = removeScriptCache;
const removeDocumentCache = (key) => removeCache(CacheService.getDocumentCache, key);
exports.removeDocumentCache = removeDocumentCache;
const removeUserCache = (key) => removeCache(CacheService.getUserCache, key);
exports.removeUserCache = removeUserCache;
