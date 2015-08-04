'use strict';

var JsMockito = require('jsmockito').JsMockito;
var JsHamcrest = require('jsmockito/node_modules/jshamcrest').JsHamcrest;

var mochito = {};
JsMockito.Integration.importTo(mochito);
JsHamcrest.Integration.copyMembers(mochito);

module.exports = mochito;
