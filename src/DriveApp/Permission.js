"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.Type = exports.Role = void 0;
var Role;
(function (Role) {
    Role["Owner"] = "owner";
    Role["Organizer"] = "organizer";
    Role["FileOrganizer"] = "fileOrganizer";
    Role["Writer"] = "writer";
    Role["Reader"] = "reader";
})(Role = exports.Role || (exports.Role = {}));
var Type;
(function (Type) {
    Type["User"] = "user";
    Type["Group"] = "group";
    Type["Domain"] = "domain";
    Type["Anyone"] = "anyone";
})(Type = exports.Type || (exports.Type = {}));
/**
 * [Use of this function requires enabling the Drive API service](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services)
 *
 * [optionalArgs documentation](https://developers.google.com/drive/api/v2/reference/permissions/insert)
 */
function add(fileId, email, role = Role.Writer, type = Type.User, optionalArgs = {
    sendNotificationEmails: false,
    supportsAllDrives: true,
}) {
    Drive.Permissions.insert({
        role,
        type,
        value: email,
    }, fileId, Object.assign({}, optionalArgs));
}
exports.add = add;
