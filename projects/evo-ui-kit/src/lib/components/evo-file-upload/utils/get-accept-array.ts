export function getAcceptArray(acceptString: string): string[] {
    return acceptString
        .toLowerCase()
        .split(',')
        .map((acceptItem: string) => acceptItem.toLowerCase());
}
