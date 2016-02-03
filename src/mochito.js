'use strict';

var JsMockito = require('jsmockito').JsMockito;
// NOTE: the line below only works if you are using NPM 3, and even then it might fail!
var JsHamcrest = require('jshamcrest').JsHamcrest;

var mochito = {
  installTo: function(target) {
    JsMockito.Integration.importTo(target);
    JsHamcrest.Integration.copyMembers(target);
  }
};
mochito.installTo(mochito);

module.exports = mochito;
