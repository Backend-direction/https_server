const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', (req, res, next) => {
  res.send('Hello from server!');
});

const sslServer = https.createServer({
  key: '',
  cert: ''
});

sslServer.listen(3443, () => console.log('secure server'));