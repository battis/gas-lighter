/// <reference types="google-apps-script" />
/// <reference types="google-apps-script" />
export type Card = {
    name: string;
    header: string;
    sections: GoogleAppsScript.Card_Service.CardSection[];
    widgets?: (GoogleAppsScript.Card_Service.Widget | string)[];
};
export type CardSection = {
    header: string;
    widgets: (GoogleAppsScript.Card_Service.Widget | string)[];
    collapsible: boolean;
    numUncollapsibleWidgets: GoogleAppsScript.Integer;
};
export declare function create({ name, header, sections, widgets, }: Partial<Card>): GoogleAppsScript.Card_Service.Card;
export declare function newCardHeader(title: string): GoogleAppsScript.Card_Service.CardHeader;
export declare function newCardSection({ header, widgets, collapsible, numUncollapsibleWidgets, }: Partial<CardSection>): GoogleAppsScript.Card_Service.CardSection;
