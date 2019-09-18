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
        this.filter((state) => state.isActive)
            .forEach((state) => state.isActive = false);

        const tab = this.getTab(name);
        tab.isActive = true;

        if (params) {
            tab.params = params;
        }
    }
}
