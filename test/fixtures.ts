export const clientListResponse = {
    page_size: 1,
    page_count: 1,
    total_count: 1,
    clients: [{
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
    }]
};

export const contactListResponse = {
    page_count: 1,
    total_size: 1,
    page_size: 1,
    contacts: [{
        "name": "John Doe",
        "ext": "1234",
        "title": "Product Manager",
        "id": 495,
        "client_id": 117,
        "mobile": "123-456-7891",
        "phone": "123-456-7890",
        "avatar": "default_avatars/avatars/missing_original.jpg",
        "email": "jdoe@example.com",
    }]
};