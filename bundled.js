(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
	"package": require("./package.json")
};
},{"./package.json":3}],2:[function(require,module,exports){
/* jslint node: true */

"use strict";

/**
 * REQUIRE DEPENDENCIES
 *
 * Browserify will follow these and pull in the sources forus.
 */
// This is just a simple custom module that we can use to hold config
// variables for the app.
var config = require('./config.js');
// This is another example/custom module. All it does is console.log()
// whatever you pass to it.
var say = require('./say.js');

/**
 * CUSTOM MODULES
 *
 * Here we're using our two custom example modules (config.js and say.js). Check
 * the console to see the output.
 */
say('It works!');
say(config.package.name + ' ver. ' + config.package.version);
},{"./config.js":1,"./say.js":4}],3:[function(require,module,exports){
module.exports={
  "name": "example-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "author": "jared@ethode.com",
  "license": "ISC"
}

},{}],4:[function(require,module,exports){
module.exports = function (message) {
    console.log(message);
};
},{}]},{},[2]);
