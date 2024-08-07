import * as LighterHtmlService from '../../HtmlService';
import content from './content.html';
import page from './page.html';

export type Root = { getUi: () => GoogleAppsScript.Base.Ui };
export type Button = {
  name: string;
  value?: string;
  class?: string;
};
export type BaseHtmlOptions = {
  message: string;
  height?: number;
  buttons?: (Button | string)[];
};
export type HtmlOptionsWithBackEndCallback = BaseHtmlOptions & {
  functionName?: string;
  handler?: never;
  script?: true;
};
export type HtmlOptionsWithHandler = BaseHtmlOptions & {
  functionName?: never;
  handler?: string;
  script?: true;
};
export type HtmlOptionsWithoutScript = BaseHtmlOptions & {
  functionName?: never;
  handler?: never;
  script: false;
};
export type HtmlOptions =
  | HtmlOptionsWithHandler
  | HtmlOptionsWithBackEndCallback
  | HtmlOptionsWithoutScript;
export type RootlessOptions = HtmlOptions & {
  title: string;
};
export type Options = RootlessOptions & {
  root: Root;
};
export type Callback = { functionName: string; args?: any[] };
export type ResponseHandler = (response: string) => string | Callback | void;

function standardizeButton(button: Button | string) {
  if (typeof button == 'string') {
    button = { name: button };
  }
  return { value: button.name, ...button };
}

function show(showFunctionName: string, { root, title, ...dialog }: Options) {
  root.getUi()[showFunctionName](
    LighterHtmlService.Template.createTemplate(page, {
      content: getHtml(dialog)
    }),
    title
  );
}

export const showModal = show.bind(null, 'showModalDialog');
export const showModeless = show.bind(null, 'showModelessDialog');

export const dialogClose = () => null;
const CLOSE = 'dialogClose';

export function getHtmlOutput({
  message,
  buttons = [{ name: 'Ok' }],
  height = 100,
  functionName,
  handler,
  script = true
}: HtmlOptions) {
  const id = Utilities.getUuid().replaceAll(/[^a-z0-9]/gi, '');
  if (handler) {
    handler = handler.replace('{{id}}', id);
  } else if (!functionName && script) {
    functionName = CLOSE;
  }
  return LighterHtmlService.Template.createTemplate(content, {
    message,
    buttons: buttons.map(standardizeButton),
    script,
    functionName,
    handler,
    id
  }).setHeight(height);
}

export const getHtml = (options: HtmlOptions) =>
  getHtmlOutput(options).getContent();

export type DialogBinding = {
  showModal: (options: RootlessOptions) => void;
  showModeless: (options: RootlessOptions) => void;
  getHtmlOutput: (options: HtmlOptions) => GoogleAppsScript.HTML.HtmlOutput;
  getHtml: (options: HtmlOptions) => string;
};

export function bindTo<T>(root: T & Root): DialogBinding {
  return class {
    public static showModal = (options: RootlessOptions) =>
      showModal({ ...options, root });
    public static showModeless = (options: RootlessOptions) =>
      showModeless({ ...options, root });
    public static getHtmlOutput = (options: HtmlOptions) =>
      getHtmlOutput(options);
    public static getHtml = (options: HtmlOptions) => getHtml(options);
  };
}
