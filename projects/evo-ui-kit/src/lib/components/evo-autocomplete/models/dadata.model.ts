export enum DadataFounderShareType {
    PERCENT = 'PERCENT',
    DECIMAL = 'DECIMAL',
    FRACTION = 'FRACTION',
}

export enum DadataCompanyType {
    LEGAL = 'LEGAL',
    INDIVIDUAL = 'INDIVIDUAL',
}

export enum DadataCompanyBranchType {
    MAIN = 'MAIN',
    BRANCH = 'BRANCH',
}

export enum DadataCompanyStatus {
    ACTIVE = 'ACTIVE',
    LIQUIDATING = 'LIQUIDATING',
    LIQUIDATED = 'LIQUIDATED',
    REORGANIZING = 'REORGANIZING',
    BANKRUPT = 'BANKRUPT',
}

export enum DadataBankStatus {
    ACTIVE = 'ACTIVE',
    LIQUIDATING = 'LIQUIDATING',
    LIQUIDATED = 'LIQUIDATED',
}

export enum DadataBankType {
    CBR = 'CBR',
    BANK = 'BANK',
    BANK_BRANCH = 'BANK_BRANCH',
    NKO = 'NKO',
    NKO_BRANCH = 'NKO_BRANCH',
    RKC = 'RKC',
    TREASURY = 'TREASURY',
    OTHER = 'OTHER'
}

export enum DadataManagerType {
    EMPLOYEE = 'EMPLOYEE',
    FOREIGNER = 'FOREIGNER',
    LEGAL = 'LEGAL',
}

export interface DadataMetro {
    name: string;
    line: string;
    distance: string;
}

export interface DadataFio {
    gender?: string;
    name: string;
    patronymic: string;
    qc?: any;
    source?: string;
    surname: string;
}

export interface DadataManager {
    ogrn: string;
    inn: string;
    name: string;
    fio: DadataFio;
    post: string;
    hid: string;
    type: DadataManagerType;
}

export interface DadataReorganized {
    ogrn: string;
    inn: string;
    name: string;
}

export interface DadataPartyOPF {
    code: string;
    full: string;
    short: string;
    type: string;
}

export interface DadataFounderShare {
    type: DadataFounderShareType;
    value?: number;
    numerator?: number;
    denominator?: number;
}

export interface DadataFounder {
    ogrn: string;
    inn: string;
    name: string;
    fio: DadataFio;
    hid: string;
    type: string;
    share: DadataFounderShare;
}

export interface DadataFioSuggestion {
    surname: string;
    name: string;
    patronymic: string;
    gender: string;
    source: string;
    qc: string;
}

export interface DadataFTSSuggestion {
    type: string;
    name: string;
    code: string;
    address: string;
}

export interface DadataAuthoritiesSuggestion {
    fts_registration?: DadataFTSSuggestion;
    fts_report?: DadataFTSSuggestion;
    pf?: DadataFTSSuggestion;
    sif?: DadataFTSSuggestion;
}

export interface DadataFinance {
    tax_system?: string;
    income?: number;
    expense?: number;
    debt?: number;
    penalty?: number;
    year?: number;
}

export interface DadataState<T> {
    actuality_date?: number;
    registration_date?: number;
    liquidation_date?: number;
    code?: string;
    status?: T;
}

export interface DadataSecondaryOKVED {
    main: boolean;
    type: string;
    code: string;
    name: string;
}

export interface DadataPartyDocumentRegistration {
    type: string;
    series: string;
    number: string;
    issue_date: number;
    issue_authority: string;
}

export interface DadataPartyDocument {
    fts_registration: DadataPartyDocumentRegistration;
    pf_registration: DadataPartyDocumentRegistration;
    sif_registration: DadataPartyDocumentRegistration;
    smb: {
        type: string;
        category: string;
        issue_date: number;
    };
}

export interface DadataPartyLicence {
    series: string;
    number: string;
    issue_date: number;
    issue_authority: string;
    suspend_date: number;
    suspend_authority: string;
    valid_from: number;
    valid_to: number;
    activities: string[];
    addresses: string[];
}

/**
 * @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=262996078
 */
export interface DadataBankSuggestion {
    bic?: string;
    swift?: string;
    inn?: string;
    kpp?: string;
    correspondent_account?: string;
    treasury_accounts?: string[];
    registration_number?: string;
    name?: {
        payment?: string;
        short?: string;
    };
    payment_city?: string;
    opf?: {
        type?: DadataBankType;
    };
    address?: DadataSuggestion<DadataAddressSuggestion>;
    source?: string;
    qc?: string;
    state?: DadataState<DadataBankStatus>;
}

/**
 * @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669107
 */
export interface DadataAddressSuggestion {
    postal_code?: string;
    country?: string;
    country_iso_code?: string;
    federal_district?: string;
    region_fias_id?: string;
    region_kladr_id: string;
    region_iso_code?: string;
    region_with_type?: string;
    region_type?: string;
    region_type_full?: string;
    region?: string;
    area_fias_id?: string;
    area_kladr_id?: string;
    area_with_type?: string;
    area_type?: string;
    area_type_full?: string;
    area?: string;
    city_fias_id?: string;
    city_kladr_id?: string;
    city_with_type?: string;
    city_type?: string;
    city_type_full?: string;
    city?: string;
    city_district_fias_id?: string;
    city_district_kladr_id?: string;
    city_district_with_type?: string;
    city_district_type?: string;
    city_district_type_full?: string;
    city_district?: string;
    settlement_fias_id?: string;
    settlement_kladr_id?: string;
    settlement_with_type?: string;
    settlement_type?: string;
    settlement_type_full?: string;
    settlement?: string;
    street_fias_id?: string;
    street_kladr_id?: string;
    street_with_type?: string;
    street_type?: string;
    street_type_full?: string;
    street?: string;
    house_fias_id?: string;
    house_kladr_id?: string;
    house_type?: string;
    house_type_full?: string;
    house?: string;
    block_type?: string;
    block_type_full?: string;
    block?: string;
    flat_fias_id?: string;
    flat_type?: string;
    flat_type_full?: string;
    flat?: string;
    postal_box?: string;
    fias_id?: string;
    fias_level?: string;
    kladr_id?: string;
    geoname_id?: string;
    capital_marker?: string;
    okato?: string;
    oktmo?: string;
    tax_office?: string;
    tax_office_legal?: string;
    source?: string;
    history_values?: string[];
    geo_lat?: string;
    geo_lon?: string;
    qc_geo?: string;
    fias_code?: string;
    fias_actuality_state?: string;
    city_area?: string;
    beltway_hit?: string;
    beltway_distance?: string;
    flat_area?: string;
    square_meter_price?: string;
    flat_price?: string;
    timezone?: string;
    metro?: DadataMetro[];
}

/**
 * @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669122
 */
export interface DadataPartySuggestion {
    address?: DadataSuggestion<DadataAddressSuggestion>;
    branch_count?: number;
    branch_type?: DadataCompanyBranchType;
    fio?: DadataFio;
    inn?: string;
    kpp?: string;
    ogrn?: string;
    ogrn_date?: number;
    hid?: string;
    management?: {
        name: string;
        post: string;
        disqualified: boolean;
    };
    name?: {
        full_with_opf?: string;
        short_with_opf?: string;
    };
    okato?: string;
    oktmo?: string;
    okpo?: string;
    okogu?: string;
    okfs?: string;
    finance?: DadataFinance;
    okved?: string;
    okved_type?: string;
    opf?: DadataPartyOPF;
    state?: DadataState<DadataCompanyStatus>;
    type?: DadataCompanyType;
    employee_count: number;
    okveds?: DadataSecondaryOKVED[];
    authorities?: DadataAuthoritiesSuggestion;
    founders?: DadataFounder[];
    managers?: DadataManager[];
    predecessors?: DadataReorganized[];
    successors?: DadataReorganized[];
    capital?: {
        type: string;
        value: number;
    };
    documents?: DadataPartyDocument[];
    licenses?: DadataPartyLicence[];
}

export interface DadataSuggestion<T> {
    data: T;
    value?: string;
    unrestricted_value?: string;
}

export interface DadataSuggestionsResponse<T> {
    suggestions: DadataSuggestion<T>[];
}
