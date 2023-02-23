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
exports.deleteUserProperty = exports.deleteDocumentProperty = exports.deleteScriptProperty = exports.setUserProperty = exports.setDocumentProperty = exports.setScriptProperty = exports.getUserProperty = exports.getDocumentProperty = exports.getScriptProperty = void 0;
const Property = __importStar(require("./shared/EncodeDecode"));
function getProperty(properties, key, decoder = JSON.parse) {
    return Property.decodeWith(decoder, properties().getProperty(key));
}
exports.getScriptProperty = getProperty.bind(null, PropertiesService.getScriptProperties);
exports.getDocumentProperty = getProperty.bind(null, PropertiesService.getDocumentProperties);
exports.getUserProperty = getProperty.bind(null, PropertiesService.getUserProperties);
function setProperty(properties, key, value, encoder = JSON.stringify) {
    return properties().setProperty(key, Property.encodeWith(encoder, value));
}
exports.setScriptProperty = setProperty.bind(null, PropertiesService.getScriptProperties);
exports.setDocumentProperty = setProperty.bind(null, PropertiesService.getDocumentProperties);
exports.setUserProperty = setProperty.bind(null, PropertiesService.getUserProperties);
function deleteProperty(properties, key) {
    return properties().deleteProperty(key);
}
exports.deleteScriptProperty = deleteProperty.bind(null, PropertiesService.getScriptProperties);
exports.deleteDocumentProperty = deleteProperty.bind(null, PropertiesService.getDocumentProperties);
exports.deleteUserProperty = deleteProperty.bind(null, PropertiesService.getUserProperties);
