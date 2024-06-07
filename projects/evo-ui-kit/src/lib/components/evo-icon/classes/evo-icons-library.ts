import {IconsCategory} from '../interfaces/icons-category';
import {IconsSource} from '../interfaces/icons-source';

export class EvoIconsLibrary {
    categories: {name: string; iconsNames: string[]}[] = [];
    shapes: IconsSource = {};
    constructor(lib: IconsCategory[][]) {
        lib.forEach((categoriesArray) => {
            this.addCategories(categoriesArray);
            this.shapes = Object.assign(this.shapes, ...categoriesArray.map((iconsCategory) => iconsCategory.shapes));
        });
    }

    addCategories(categoriesArray: IconsCategory[]): void {
        this.categories.push(
            ...categoriesArray.map((iconsCategory) => {
                return {
                    name: iconsCategory.name,
                    iconsNames: Object.keys(iconsCategory.shapes),
                };
            }),
        );
    }
}
