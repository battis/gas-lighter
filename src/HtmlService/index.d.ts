/// <reference types="google-apps-script" />
export * as Element from './Element';
/**
  ### `app.ts`
```ts
    import { Terse } from '@battis/gas-lighter';

    global.include = Terse.HtmlService.include;
    ```

    ### `view.html`
```html
<html>
  <head>
    <?!= include('stylesheet'); ?>
  </head>
  <body>
    <div>Foo</div>
    <?!= include ('frontend'); ?>
  </body>
</html>
```

     */
export declare function createTemplate(html: string, data?: {}): GoogleAppsScript.HTML.HtmlOutput;
export declare function createTemplateFromFile(filePath: string, data?: {}): GoogleAppsScript.HTML.HtmlOutput;
export declare const include: (filePath: string, data?: object) => string;
