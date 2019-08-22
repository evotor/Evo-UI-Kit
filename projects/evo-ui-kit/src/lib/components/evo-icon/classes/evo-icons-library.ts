import { IconsCategory } from '../interfaces/icons-category';
import { IconsSource } from '../interfaces/icons-source';

export class EvoIconsLibrary {
    categories: { name: string; iconsNames: string[]; }[];
    shapes: IconsSource;
    constructor(
        lib: IconsCategory[]
    ) {
        this.categories = lib.map(iconsCategory => {
            return {
                name: iconsCategory.name,
                iconsNames: Object.keys(iconsCategory.shapes)
            };
        });
        this.shapes = Object.assign({}, ...lib.map(iconsCategory => iconsCategory.shapes));
    }
}
