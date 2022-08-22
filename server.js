const path = require('path');
const fs = require('fs');
const https = require('https');
const express = require('express');
// instância express
const app = express();

const key = fs.readFileSync(path.join(__dirname, 'certs/certificate.key'), 'utf8');
const cert = fs.readFileSync(path.join(__dirname, 'certs/certificate.crt'), 'utf8');
const credentials = {
    key: key,
    cert: cert
};

const server = https.createServer(credentials, app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static-page/index.html'));
});

server.listen(4444, () => {
    console.log('server listen on https://localhost:4444')
});
