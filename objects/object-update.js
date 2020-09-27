var stooge = require('./object-literals');
var flight = require('./object-literals-nest');

stooge.nickname = 'Curly';

flight.equipment = {
  model: 'Boeing 777'
};

flight.status = 'overdue';