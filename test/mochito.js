'use strict';

var mochito = require('..');

describe('mochito', function() {
  it('allows mocking to be performed with no set-up required', function() {
    var mock = mochito.mock({
      doSomething: function() {}
    });

    mock.doSomething('x', 'y');
    mock.doSomething('z', 'y');

    mochito.verify(mock, mochito.once()).doSomething('x', 'y');
    mochito.verify(mock, mochito.once()).doSomething('z', 'y');
    mochito.verify(mock, mochito.times(2)).doSomething(mochito.anything(), 'y');
  });
});
