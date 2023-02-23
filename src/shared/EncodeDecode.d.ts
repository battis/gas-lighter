export type Decoder = (encoded: string) => any;
export type Encoder = (value: any) => string;
export declare function encodeWith(encoder: Encoder, value: any): any;
export declare function decodeWith(decoder: Decoder, value: any): any;
