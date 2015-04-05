var empty_object = {};

var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  }
}

var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stogge['middle-name'] = 'Moses';
another_stogge.nickname = 'Moe';

//add new property to dynamic relationship

stooge.profession = 'actor';
another_stogge.profession    // actor
