export function clearMultiline(value: string, isMultiline: boolean): string {
    if (typeof value === 'string') {
        value = isMultiline ? value : value?.replace(/\n/g, '');
    }

    return value;
}
