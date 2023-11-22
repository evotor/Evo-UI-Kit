import { FileSizeUnit } from '../enums/file-size-unit';

export const SIZE_UNIT_MAP: { [key: string]: string } = {
    [FileSizeUnit.MB]: 'Мб',
    [FileSizeUnit.GB]: 'Гб',
    [FileSizeUnit.KB]: 'Кб',
    [FileSizeUnit.B]: 'Б'
};
