import * as Action_module from './Action';
import * as Card_module from './Card';
import * as Navigation_module from './Navigation';
import * as Widget_module from './Widget';
declare namespace CardService {
    export import Action = Action_module;
    export import Card = Card_module;
    export import Navigation = Navigation_module;
    export import Widget = Widget_module;
}
export default CardService;
/** @deprecated */
export declare const stringify: typeof Action_module.stringify;
/** @deprecated */
export declare const newAction: typeof Action_module.create;
/** @deprecated */
export declare const newCard: typeof Card_module.create;
/** @deprecated */
export declare const newCardHeader: typeof Card_module.newCardHeader;
/** @deprecated */
export declare const newCardSection: typeof Card_module.newCardSection;
/** @deprecated */
export declare const replaceStack: typeof Navigation_module.replaceStack;
/** @deprecated */
export declare const pushCard: typeof Navigation_module.pushCard;
/** @deprecated */
export declare const newTexdtParagraph: typeof Widget_module.newTextParagraph;
/** @deprecated */
export declare const newDecordatedTexdt: typeof Widget_module.newDecoratedText;
/** @deprecated */
export declare const newTextButton: typeof Widget_module.newTextButton;
