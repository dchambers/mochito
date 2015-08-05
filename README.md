[![Build Status](https://travis-ci.org/dchambers/mochito.png)](https://travis-ci.org/dchambers/mochito)

# Mochito

Mochito is a hygenic [JsMockito](http://jsmockito.org/) / [JsHamcrest](http://danielmartins.ninja/jshamcrest/) wrapper for modern test frameworks like [Mocha](http://mochajs.org/). It aims to make [JsMockito](http://jsmockito.org/) more competitive when compared with [Sinon.JS](http://sinonjs.org/).


## Rationale

Despite its popularity, Sinon.JS has a number of negatives, including:

  1. You can't assert on a spy or stub; you can only ask a question that returns
     a boolean, which provides no error info if it fails.
  2. but, ... you have to use a spy or stub if you need a function rather
     than an object.
  3. Mocks have to define all expectations up front (leading to overly tight
     specifications), rather than allowing assertions to be made post-hoc.
  4. As a consequence, you can't do
     [Given-When-Then](https://en.wikipedia.org/wiki/Given-When-Then) style
     testing with Sinon.JS because what would otherwise be the _then_ clause
     must appear before the _when_ clause.
  5. Mocked methods are only given the ability to verify expectations after some
     expectations have been added, often preventing the use of the mock when
     it's first created.
  6. The `mock()` function returns a configurator object rather than the mock
     itself, which is somewhat confusing.
  7. You need to remember to verify your expectations in your tear down methods
     or tests may pass when they shouldn't.
  8. Its deep equality checking method doesn't consider an array to be
     the same as an argument array containing the same items.

Unfortunately, JsMockito has some downsides too (which Mochito fixes):

  1. It uses lots of global variables rather than allowing you to require a
     single item.
  2. It's difficult to integrate into your testing framework &mdash; as a
     consequence of using globals.
  3. It requires you to separately include JsHamcrest, but doesn't work
     if you include a version that isn't exactly the version it's using.
  4. The error messages don't read very well because JsMockito throws strings
     which are subsequently converted to `Error` instances by the containing
     test framework (will be fixed by
     [this issue](https://github.com/cleishm/jsmockito/issues/38)).


## Usage

Using _mochito_ is simple, for example:

```js
var mochito = require('mochito');

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
```
