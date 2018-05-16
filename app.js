const express = require('express');
const http = require('http');
const path = require('path');
const jsonServer = require('json-server');
const router = jsonServer.router('https://my-json-server.typicode.com/BlueSpeed7/daycare-angular/db');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

app.use(router);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
