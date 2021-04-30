/**
 * @deprecated use an DadataCompanyType
 */
export enum DaDataEntityTypes {
    legal = 'LEGAL',
    individual = 'INDIVIDUAL',
}

/**
 * @deprecated use an DadataPartySuggestion
 */
export class DaDataParty {
    name: {
        full: string,
        full_with_opf: string,
        latin: string,
        short: string,
        short_with_opf: string,
    };

    management: {
        name: string,
        post: string,
    };

    address: {
        value: string,
        data: any,
    };

    inn: string;
    kpp: string;
    okpo: string;
    ogrn: string;
    okved: string;
    okato: string;

    type: DaDataEntityTypes;

    constructor(data?: any) {
        Object.assign(this, data);
    }

    get legalName(): string {
        return this.name ? this.name.short_with_opf || this.name.full_with_opf : null;
    }

    get contactPerson(): string {
        if (this.management) {
            return this.management.name;
        } else {
            return this.name ? this.name.full : '';
        }
    }
}
