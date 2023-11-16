import bytes from 'bytes';
import { FileSizeInfo } from '../interfaces/file-size-info';

export function getFileSizeInfo(size: string | number): FileSizeInfo {
    const sizeInBytes = typeof size === 'number' ? size : bytes(size);

    return {
        sizeInBytes,
        formattedSize: bytes(sizeInBytes, { unitSeparator: ' ' }).toUpperCase()
    };
}
