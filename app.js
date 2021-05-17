/**
 * Create server as below
 * Generate key with openssl openssl genrsa -out key.pem
 * Generate itermidiate crt openssl req -new -key key.pem -out csr.pem
 * Generate final cert openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
 */
const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', (req, res, next) => {
  res.send('Hello from server!');
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
  },
  app
);

sslServer.listen(3443, () => console.log('secure server'));