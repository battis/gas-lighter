import { include } from './HtmlService';
import { getProgress } from './HtmlService/Element/Progress';
import { dialogClose } from './UI/Dialog';

// FIXME won't work without improvements in gas-webpack-plugin
// TODO some sort of fancy filtering
export function register() {
    global.include = include;
    global.getProgress = getProgress;
    global.dialogClose = dialogClose;
}