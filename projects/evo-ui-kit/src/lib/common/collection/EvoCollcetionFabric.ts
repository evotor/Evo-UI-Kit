import { EvoCollection } from './EvoCollection';

export class EvoCollectionFabric {
    static create<T extends EvoCollection<K>, K>(collectionType: (new () => T), itemType: (new (...args: any[]) => K), data: any[]) {
        const collection = Object.create(collectionType.prototype);

        for (let i = 0; i < data.length; i++) {
            collection.push(new itemType(data[i]));
        }

        return collection as T;
    }
}
