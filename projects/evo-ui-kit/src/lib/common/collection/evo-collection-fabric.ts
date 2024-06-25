import {EvoCollection} from './evo-collection';

export class EvoCollectionFabric {
    // eslint-disable-next-line
    static create<T extends EvoCollection<K>, K>(
        collectionType: new () => T,
        // eslint-disable-next-line
        itemType: new (...args: any[]) => K,
        // eslint-disable-next-line
        data: any[],
    ) {
        const collection = Object.create(collectionType.prototype);

        for (let i = 0; i < data.length; i++) {
            collection.push(new itemType(data[i]));
        }

        return collection as T;
    }
}
