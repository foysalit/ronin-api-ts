### Ronin Api Wrapper

To use the package, follow the below steps:

- Install from npm `npm i ronin-client`
- Import the client class in your js code `import RoninClient from 'ronin-client'`
- Instantiate the class with your api token and subdomain:
```javascript
const ronin = new RoninClient({
    subdomain: 'my-domain',
    token: 'mylongpa55word'
});
``` 
- Through the `ronin` variable, you can now access list, create, udpate etc. methods for various modules such as client, contact, invoice etc.

```javascript
// get a list of clients
const clients = await ronin.clients.list();

// get a list of contacts
const contacts = await ronin.contacts.list();
```

### Todo
- Build pagination.
- Add missing modules.
- Add more tests.