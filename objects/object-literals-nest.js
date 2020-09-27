var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};

flight.equipment = {
  model: 'Being 777'
};

flight.status = 'overdue';

console.log(typeof flight.number); // 'number'
console.log(typeof flight.status); // 'string'
console.log(typeof flight.arrival); // 'object'
console.log(typeof flight.manifest); // 'undefined'

exports.flight;