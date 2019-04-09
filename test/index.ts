import { expect } from 'chai';
import * as nock from 'nock';

import RoninClient from '../src';
import { clientListResponse, contactListResponse } from './fixtures';

describe('RoninClient', async () => {
    const authParams = { user: 'test2', pass: 'test2' };
    const baseUrl = `https://test1.roninapp.com`;
    let ronin: RoninClient;

    beforeEach(() => {
        ronin = new RoninClient({ subdomain: 'test1', token: 'test2' });
    });

    it ('Calls api with subdomain and token', async () => {
        nock(baseUrl)
            .get('/clients')
            .basicAuth({...authParams, pass: 'test3'})
            .reply(200, clientListResponse);


        await ronin.clients.list().catch(err => {
            expect(err.message).to.include('No match for request');
        });
    });

    it ('Returns clients list', async () => {
        nock(baseUrl)
            .get('/clients')
            .basicAuth(authParams)
            .reply(200, clientListResponse);


        const clients = await ronin.clients.list();
        expect(clients).to.be.an('object').that.deep.equal(clientListResponse);
    });

    it ('Returns contacts list', async () => {
        nock(baseUrl)
            .get('/contacts')
            .basicAuth(authParams)
            .reply(200, contactListResponse);


        const contacts = await ronin.contacts.list();
        expect(contacts).to.be.an('object').that.deep.equal(contactListResponse);
    });
});