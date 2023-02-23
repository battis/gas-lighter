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
exports.remove = exports.set = exports.get = void 0;
const Metadata = __importStar(require("../shared/EncodeDecode"));
function get(sheet, key) {
    const meta = sheet.createDeveloperMetadataFinder().withKey(key).find();
    if (meta && meta.length) {
        return Metadata.decodeWith(JSON.parse, meta.shift().getValue());
    }
    return null;
}
exports.get = get;
function set(sheet, key, value) {
    const str = Metadata.encodeWith(JSON.stringify, value);
    const meta = sheet.createDeveloperMetadataFinder().withKey(key).find();
    if (meta && meta.length) {
        return meta.shift().setValue(str);
    }
    else {
        return sheet.addDeveloperMetadata(key, str);
    }
}
exports.set = set;
function remove(sheet, key) {
    const meta = sheet.createDeveloperMetadataFinder().withKey(key).find();
    if (meta && meta.length) {
        return meta.shift().remove();
    }
    return null;
}
exports.remove = remove;
