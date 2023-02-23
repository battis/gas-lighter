/// <reference types="google-apps-script" />
import * as Action from './Action';
export type DecoratedText = {
    topLabel: string;
    text: string;
    bottomLabel: string;
    wrap: boolean;
};
export type TextButton = Action.Action & {
    text: string;
};
export declare function newTextParagraph(text: string): GoogleAppsScript.Card_Service.TextParagraph;
export declare function newDecoratedText({ topLabel, text, bottomLabel, wrap, }: Partial<DecoratedText>): GoogleAppsScript.Card_Service.DecoratedText;
export declare function newTextButton({ text, functionName, parameters, }: Partial<TextButton>): GoogleAppsScript.Card_Service.TextButton;
