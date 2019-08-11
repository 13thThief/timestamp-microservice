'use strict';

let express = require('express');
let app = express();
let cors = require('cors');
let route = require('./routes');

app.use(cors({optionSuccessStatus: 200}));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api', route);

app.use('*', function ( req, res, next) {
  res.sendStatus(404);
})

let listener = app.listen(process.env.PORT || 3000, (req, res) => {
  console.log('Server running on', listener.address().port);
})