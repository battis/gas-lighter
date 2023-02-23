"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeWith = exports.encodeWith = void 0;
function encodeWith(encoder, value) {
    try {
        return encoder(value);
    }
    catch (e) {
        return value;
    }
}
exports.encodeWith = encodeWith;
function decodeWith(decoder, value) {
    try {
        return decoder(value);
    }
    catch (e) {
        return value;
    }
}
exports.decodeWith = decodeWith;
