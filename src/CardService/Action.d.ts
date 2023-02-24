/// <reference types="google-apps-script" />
export type UnprocessedParameters = {
    [key: string]: any;
};
export type Parameters = {
    [key: string]: string;
};
export type Action = {
    functionName: string;
    parameters?: UnprocessedParameters;
};
export declare function create({ functionName, parameters, }: Action): GoogleAppsScript.Card_Service.Action;
