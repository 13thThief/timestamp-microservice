'use strict';

let empty = function(res){
  let date = new Date();
  res.json({unix: date.getTime(), utc: date.toUTCString()});
}

let nonEmpty = function(res, date){
  let _date, body;
  if(isNaN(date))
    _date = new Date(date);
  else _date = new Date(parseInt(date));

  if(_date == 'Invalid Date')
     body = { error: 'Invalid Date'};
  else body = { unix: _date.getTime(), utc: _date.toUTCString()};
  
  res.json(body);
}

module.exports = {
  empty, nonEmpty
}