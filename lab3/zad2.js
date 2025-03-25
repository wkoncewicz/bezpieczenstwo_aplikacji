const express = require('express');
const Keycloak = require('keycloak-connect');

const app = express();
app.use(express.json());

const keycloak = new Keycloak({}, {
    'realm': 'demo-realm',
    'auth-server-url': 'http://localhost:8080/realms/demo-realm/protocol/openid-connect/auth',
    'resource': 'express-app',
    'bearer-only': true,
    "ssl-required": 'external',
    "verify-token-audience": false
})

keycloak.middleware();
keycloak.protect();

app.get('/hello', (req, res) => {
    res.send("Hello World");
});


port = 3000
const server = app.listen(port, () => {
    console.log("Serwer działa na porcie", port);
})