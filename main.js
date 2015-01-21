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