import axios from 'axios';

import { 
    RoninApiCallOptions, 
    RoninClientConfig, 
    RoninApiContacts, 
    RoninApiClients, 
    RoninApiModule, 
} from './interfaces';

export default class RoninClient {
    constructor (private config: RoninClientConfig) {
    };

    public clients: RoninApiClients = this.connectApiCalls('clients');
    public contacts: RoninApiContacts = this.connectApiCalls('contacts');

    private getHeaders() {
        return {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        };
    };

    private connectApiCalls(url: string): RoninApiModule {
        const list = () => this.apiCall({
            url, method: 'get',
        });

        const create = (data: object): Promise<any> => this.apiCall({
            url, method: 'post', data,
        })

        return { list, create };
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