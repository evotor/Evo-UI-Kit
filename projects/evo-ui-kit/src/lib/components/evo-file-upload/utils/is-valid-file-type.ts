import { getAcceptArray } from './get-accept-array';

export function isValidFileType(file: File, accept: string): boolean {
    const extension = `.${(file.name.split('.').pop() || '').toLowerCase()}`;

    return getAcceptArray(accept).some(
        (acceptItem: string) =>
            extension === acceptItem ||
            acceptItem === file.type ||
            (acceptItem.split('/')[1] === '*' &&
                file.type.split('/')[0] === acceptItem.split('/')[0])
    );
}
