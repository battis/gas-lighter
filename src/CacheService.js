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
exports.removeUserCache = exports.removeDocumentCache = exports.removeScriptCache = exports.putUserCache = exports.putDocumentCache = exports.putScriptCache = exports.getUserCache = exports.getDocumentCache = exports.getScriptCache = void 0;
const Cache = __importStar(require("./shared/EncodeDecode"));
function getCache(cache, key, decoder = JSON.parse) {
    return Cache.decodeWith(decoder, cache().get(key));
}
exports.getScriptCache = getCache.bind(null, CacheService.getScriptCache);
exports.getDocumentCache = getCache.bind(null, CacheService.getDocumentCache);
exports.getUserCache = getCache.bind(null, CacheService.getUserCache);
function putCache(cache, key, value, encoder = JSON.stringify, expirationInSeconds = 600) {
    return cache().put(key, Cache.encodeWith(encoder, value), expirationInSeconds);
}
exports.putScriptCache = putCache.bind(null, CacheService.getScriptCache);
exports.putDocumentCache = putCache.bind(null, CacheService.getDocumentCache);
exports.putUserCache = putCache.bind(null, CacheService.getUserCache);
function removeCache(cache, key) {
    const c = cache();
    c.put(key, null); // FIXME experience suggests that caches don't get removed
    return c.remove(key);
}
exports.removeScriptCache = removeCache.bind(null, CacheService.getScriptCache);
exports.removeDocumentCache = removeCache.bind(null, CacheService.getDocumentCache);
exports.removeUserCache = removeCache.bind(null, CacheService.getUserCache);
