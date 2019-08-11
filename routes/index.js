'use strict';

let express = require('express');
let route = express.Router();
let api = require('../api');

route.get('/timestamp/:date?', (req, res, next) => {
  let date = req.params.date;
  if(date === undefined)
    api.empty(res);
  else api.nonEmpty(res, date);
})

module.exports = route;
