const routes = require('./items/items.server.routes');
const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Fearless! This is my code exercise!');
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);