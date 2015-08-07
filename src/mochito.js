'use strict';

var JsMockito = require('jsmockito').JsMockito;
var JsHamcrest = require('jsmockito/node_modules/jshamcrest').JsHamcrest;

var mochito = {
  installTo: function(target) {
    JsMockito.Integration.importTo(target);
    JsHamcrest.Integration.copyMembers(target);
  }
};
mochito.installTo(mochito);

module.exports = mochito;
