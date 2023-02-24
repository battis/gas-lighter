import * as Permission_module from './Permission';
declare namespace DriveApp {
    export import Permission = Permission_module;
}
export default DriveApp;
/** @deprecated */
export declare const addPermission: typeof Permission_module.add;
