export interface EvoTabState {
    name: string;
    isActive: boolean;
    params?: {};
}

export class EvoTabStateCollection extends Array<EvoTabState> implements Array<EvoTabState> {

    private constructor(items?: Array<any>) {
        super(...items);
    }

    static create(tabs: any[]): EvoTabStateCollection {
        const array: EvoTabStateCollection = Object.create(EvoTabStateCollection.prototype);

        for (let i = 0; i < tabs.length; i++) {
            array.push(tabs[i]);
        }

        return array;
    }

    initTab(name: string) {
        this.push({name: name, isActive: false});
    }

    hasTab(name: string): boolean {
        return this.some((state) => state.name === name);
    }

    getTab(name: string): EvoTabState {
        return this.find((state) => state.name === name);
    }

    setTab(name: string, params?: {}) {
        const prevActiveTab = this.find((state) => state.isActive);

        if (prevActiveTab) {
            prevActiveTab.isActive = false;
        }

        const newActiveTab = this.getTab(name);
        newActiveTab.isActive = true;

        if (params) {
            newActiveTab.params = params;
        }
    }
}
