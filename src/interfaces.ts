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

export interface RoninApiRecurringEntry {
    action: number;
    client_id: number;
    compound_tax: boolean;
    currency_code: string;
    due_period: number;
    id: number;
    next_date: string;
    note: string;
    number: string;
    occurrences_remaining: number;
    payment_profile_id?: any;
    po: any;
    status: number;
    summary: any;
    tax: number;
    tax2: number;
    tax2_label: string;
    tax_label: string;
    tax3_label: string;
    tax3: number;
    time_interval: number;
    title: string;
    unlimited: boolean;
    updated_at: Date;
    subtotal: number;
    total_cost: number;
    client: RoninApiClientEntry,
    recurring_schedule_items: RoninApiRecurringScheduleItem[],
};

export interface RoninApiRecurringScheduleItem {
    id: number;
    item_type: number;
    price: string;
    quantity: number;
    recurring_schedule_id: number;
    title: string;
    taxable: boolean;
    secondary_tax: boolean;
    tertiary_tax: boolean;
    total_tax: number;
};

export interface RoninApiRecurringListResponse extends RoninApiListResponse {
    recurring: RoninApiRecurringEntry[]
};

export interface RoninApiModule {
    list(): Promise<any>,
    create?(data: object): Promise<any>,
    show(id: string | number): Promise<any>,
    update(id: string | number, data: object): Promise<any>,
};

export interface RoninApiClients extends RoninApiModule {
    list(): Promise<RoninApiClientListResponse>,
    create(data: object): Promise<RoninApiClientEntry>,
    show(id: string | number): Promise<RoninApiClientEntry>,
    update(id: string | number, data: object): Promise<RoninApiClientEntry>,
    addContact(clientId: string | number, contactData: object): Promise<RoninApiContactEntry>
};

export interface RoninApiContacts extends RoninApiModule {
    list(): Promise<RoninApiContactListResponse>,
    show(id: string | number): Promise<RoninApiContactEntry>,
    update(id: string | number, contactData: object): Promise<RoninApiContactEntry>,
};

export interface RoninApiRecurring extends RoninApiModule {
    list(): Promise<RoninApiRecurringListResponse>,
    create(data: object): Promise<RoninApiRecurringEntry>,
    show(id: string | number): Promise<RoninApiRecurringEntry>,
    update(id: string | number, data: object): Promise<RoninApiRecurringEntry>,
};