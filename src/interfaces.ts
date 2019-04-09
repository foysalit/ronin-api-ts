export interface RoninClientConfig {
    subdomain: string,
    token: string,
};

export interface RoninApiCallOptions {
    url: string, 
    data?: object,
    method: string, 
    params?: object,
};

export interface RoninApiListResponse {
    page_size: number,
    page_count: number,
    total_count: number,
};

export interface RoninApiClientEntry {
    id: number;
    name: string;
    description: string;
    website: string;
    country: string;
    address: string;
    address_2: string;
    city: string;
    state: string;
    zip: string;
    created_at: Date;
    updated_at: Date;
    invoice_extra_fields: string;
    number: string;
    status: number;
    contact_viewable: boolean;
};

export interface RoninApiClientListResponse extends RoninApiListResponse {
    clients: RoninApiClientEntry[]
};

export interface RoninApiContactEntry {
    name: string;
    ext: string;
    title: string;
    id: number;
    client_id: number;
    mobile: string;
    phone: string;
    avatar: string;
    email: string;
};

export interface RoninApiContactListResponse extends RoninApiListResponse {
    clients: RoninApiContactEntry[]
};

export interface RoninApiModule {
    list(): Promise<any>,
    create(data: object): Promise<any>,
}

export interface RoninApiClients extends RoninApiModule {
    list(): Promise<RoninApiClientListResponse>,
    create(data: object): Promise<RoninApiClientEntry>,
};

export interface RoninApiContacts extends RoninApiModule {
    list(): Promise<RoninApiContactListResponse>,
    create(data: object): Promise<RoninApiContactEntry>,
};