import axios from 'axios';

import { 
    RoninApiCallOptions, 
    RoninClientConfig, 
    RoninApiContacts, 
    RoninApiClients,
    RoninApiRecurring, 
} from './interfaces';

export default class RoninClient {
    constructor (private config: RoninClientConfig) {
    };

    public clients: RoninApiClients = {
        list: () => this.apiCall({
            url: 'clients', method: 'get',
        }),
        show: (id: string | number) => this.apiCall({
            url: `clients/${id}`, method: 'get',
        }),
        create: (client: object) => this.apiCall({
            url: 'clients', method: 'post', data: { client },
        }),
        update: (id: string | number, client: object) => this.apiCall({
            url: `clients/${id}`, method: 'put', data: { client }
        }),
        addContact: (clientId: string | number, client_user: object) => this.apiCall({
            url: `clients/${clientId}/contacts`, method: 'post', data: { client_user }
        }),
    };

    public contacts: RoninApiContacts = {
        list: () => this.apiCall({
            url: 'contacts', method: 'get',
        }),
        show: (id: string | number) => this.apiCall({
            url: `contacts/${id}`, method: 'get',
        }),
        update: (id: string | number, client: object) => this.apiCall({
            url: `contacts/${id}`, method: 'put', data: { client }
        }),
    };

    public recurring: RoninApiRecurring = {
        list: () => this.apiCall({
            url: 'recurring', method: 'get',
        }),
        show: (id: string | number) => this.apiCall({
            url: `recurring/${id}`, method: 'get',
        }),
        create: (recurring_schedule: object) => this.apiCall({
            url: 'recurring', method: 'post', data: { recurring_schedule },
        }),
        update: (id: string | number, recurring_schedule: object) => this.apiCall({
            url: `recurring/${id}`, method: 'put', data: { recurring_schedule }
        }),
    };

    private getHeaders() {
        return {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        };
    };

    private async apiCall (options: RoninApiCallOptions): Promise<any> {
        const { token, subdomain } = this.config;

        if (!token || !subdomain) {
            throw new Error('Please make sure you set the ronin config properly');
        }

        const response = await axios({
            baseURL: `https://${subdomain}.roninapp.com/`,
            headers: this.getHeaders(),
            responseType: 'json',
            auth: { 
                username: token, 
                password: token 
            },
            ...options 
        });

        return response.data;
    };
};