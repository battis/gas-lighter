export declare enum Role {
    Owner = "owner",
    Organizer = "organizer",
    FileOrganizer = "fileOrganizer",
    Writer = "writer",
    Reader = "reader"
}
export declare enum Type {
    User = "user",
    Group = "group",
    Domain = "domain",
    Anyone = "anyone"
}
/**
 * [Use of this function requires enabling the Drive API service](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services)
 *
 * [optionalArgs documentation](https://developers.google.com/drive/api/v2/reference/permissions/insert)
 */
export declare function add(fileId: string, email: string, role?: Role, type?: Type, optionalArgs?: object): void;
