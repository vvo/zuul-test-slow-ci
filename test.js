var test = require('tape');
var random = require('lodash/number/random')

test('a lot of asserts', function(t) {
  for (var i = 0; i < 150; i++) {
    t.pass('Woohoo ' + Date.now() + random(0, 10000000000));
  }

  t.end();
});
