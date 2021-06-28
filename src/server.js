'use strict';

const error404 = require('./ error-handlers/404');
const error500 = require('./ error-handlers/500');

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const express = require('express');

const app = express();

app.use(express.json());

app.use(logger);
// app.use(validator);




app.get('/person', validator, (req, res) => {
  const output = {
    name: req.query.name,
  };
  res.json(output);
});



app.use('*', error404);
app.use(error500);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};






