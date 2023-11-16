import { EvoUploadFileStatus } from '../enums/evo-upload-file-status';

export interface EvoUploadFile {
    label: string;
    status: EvoUploadFileStatus;
    fileSize?: number | string; // file size bytes or string with units
    loadedPercentages?: number;
    isClickableFile?: boolean;
}
