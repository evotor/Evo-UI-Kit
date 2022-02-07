export abstract class EvoCollection<T> extends Array<T> {
    public constructor() {
        super();
        throw new Error(`Inheritor of EvoCollection can't be instantiated, use EvoCollectionFabric.create() instead.`);
    }
}
