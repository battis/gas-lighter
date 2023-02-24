import Element_namespace from './Element';
import * as Template_module from './Template';
declare namespace HtmlService {
    export import Element = Element_namespace;
    const createTemplate: typeof Template_module.createTemplate;
    const createTemplateFromFile: typeof Template_module.createTemplateFromFile;
    const include: (filePath: string, data?: object) => string;
}
export default HtmlService;
