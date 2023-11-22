import bytes from 'bytes';
import { FileSizeInfo } from '../interfaces/file-size-info';
import { SIZE_UNIT_MAP } from '../constants/size-unit-map';

export function getFileSizeInfo(size: string | number): FileSizeInfo {
    const sizeInBytes = typeof size === 'number' ? size : bytes(size);

    const [sizeInFormat, format] = bytes(sizeInBytes, {
        unitSeparator: ' '
    })
        .toLowerCase()
        .split(' ');

    const mappedFormat = SIZE_UNIT_MAP[format];

    return {
        sizeInBytes,
        formattedSize: [sizeInFormat, mappedFormat].join('\u00A0')
    };
}
