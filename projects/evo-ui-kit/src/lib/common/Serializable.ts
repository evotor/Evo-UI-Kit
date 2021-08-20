export abstract class Serializable {
    protected constructor(data) {
        Object.assign(this, data);
    }
}
