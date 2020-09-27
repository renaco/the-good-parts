var stooge = require('./object-literals');

var x = stooge;
x.nickname = 'Curly';

var nick = stooge.nickname;
console.log(nick);