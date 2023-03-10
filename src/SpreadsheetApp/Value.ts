export function replaceWithDisplayValues(
    range: GoogleAppsScript.Spreadsheet.Range
) {
    range.setValues(range.getDisplayValues());
}

export function replaceAllWithDisplayValues(
    sheet: GoogleAppsScript.Spreadsheet.Sheet
) {
    replaceWithDisplayValues(
        sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    );
}

export function set(
    sheet: GoogleAppsScript.Spreadsheet.Sheet,
    a1notation: string,
    value: any
) {
    const range = sheet.getRange(a1notation);

    if (Array.isArray(value)) {
        if (!Array.isArray(value[0])) {
            value = [value];
        }
        range.setValues(value);
    } else {
        range.offset(0, 0, 1, 1).setValue(value);
    }
}

export const getSheetDisplayValues = (
    sheet: GoogleAppsScript.Spreadsheet.Sheet
) =>
    sheet
        .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
        .getDisplayValues();
