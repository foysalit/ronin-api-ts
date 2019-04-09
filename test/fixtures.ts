export const client = {
    id: 234,
    name: '234 America',
    description: '',
    website: 'http://www.234.com',
    country: 'US',
    address: '234 Usa',
    address_2: '',
    city: 'Houston',
    state: 'TX',
    zip: '234',
    created_at: '2013-12-09T20:28:18.000Z',
    updated_at: '2018-11-18T10:31:04.000Z',
    invoice_extra_fields: '',
    number: '',
    status: 1,
    contact_viewable: true
};

export const clientListResponse = {
    page_size: 1,
    page_count: 1,
    total_count: 1,
    clients: [client]
};

export const contact = {
    "name": "John Doe",
    "ext": "1234",
    "title": "Product Manager",
    "id": 495,
    "client_id": 117,
    "mobile": "123-456-7891",
    "phone": "123-456-7890",
    "avatar": "default_avatars/avatars/missing_original.jpg",
    "email": "jdoe@example.com",
};

export const contactListResponse = {
    page_count: 1,
    total_size: 1,
    page_size: 1,
    contacts: [contact]
};

export const recurringScheduleItem = {
    "id": 3,
    "item_type": 1,
    "price": "49.99",
    "quantity": 1.0,
    "recurring_schedule_id": 2,
    "title": "Subscription",
    "taxable?": false,
    "secondary_tax?": false,
    "tertiary_tax?": false,
    "total_tax": 0
};

export const recurring = {
    "action": 0,
    "client_id": 4,
    "compound_tax": false,
    "currency_code": "USD",
    "due_period": 10,
    "id": 2,
    "next_date": "2014-03-16",
    "note": "",
    "number": "1000001",
    "occurrences_remaining": 10,
    "payment_profile_id": null,
    "po": null,
    "status": 0,
    "summary": null,
    "tax": 8.25,
    "tax2": 2.0,
    "tax2_label": "",
    "tax_label": "",
    "tax3_label": "",
    "tax3": 0,
    "time_interval": 3,
    "title": "Monthly Retainer",
    "unlimited": false,
    "updated_at": "2013-02-06T21:23:21-08:00",
    "subtotal": 49.99,
    "total_cost": 49.99,
    "client": client,
    "recurring_schedule_items": [ recurringScheduleItem ]
};

export const recurringListResponse = {
    page_count: 1,
    total_size: 1,
    page_size: 1,
    contacts: [contact]
};