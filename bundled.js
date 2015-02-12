(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./main.js":[function(require,module,exports){
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
},{"./config.js":"/Users/flack/Sync/Dev/WebServer/sandbox/example-app/config.js","./say.js":"/Users/flack/Sync/Dev/WebServer/sandbox/example-app/say.js"}],"/Users/flack/Sync/Dev/WebServer/sandbox/example-app/config.js":[function(require,module,exports){
module.exports = {
	"package": require("./package.json")
};
},{"./package.json":"/Users/flack/Sync/Dev/WebServer/sandbox/example-app/package.json"}],"/Users/flack/Sync/Dev/WebServer/sandbox/example-app/package.json":[function(require,module,exports){
module.exports={
  "name": "example-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "author": "jared@ethode.com",
  "license": "ISC",
  "devDependencies": {
    "browserify": "^8.1.3",
    "gulp": "^3.8.11",
    "gulp-util": "^3.0.3",
    "vinyl-source-stream": "^1.0.0",
    "watchify": "^2.3.0"
  }
}

},{}],"/Users/flack/Sync/Dev/WebServer/sandbox/example-app/say.js":[function(require,module,exports){
module.exports = function (message) {
    console.log(message);
};
},{}]},{},["./main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmpzIiwiY29uZmlnLmpzIiwicGFja2FnZS5qc29uIiwic2F5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGpzbGludCBub2RlOiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFJFUVVJUkUgREVQRU5ERU5DSUVTXG4gKlxuICogQnJvd3NlcmlmeSB3aWxsIGZvbGxvdyB0aGVzZSBhbmQgcHVsbCBpbiB0aGUgc291cmNlcyBmb3J1cy5cbiAqL1xuLy8gVGhpcyBpcyBqdXN0IGEgc2ltcGxlIGN1c3RvbSBtb2R1bGUgdGhhdCB3ZSBjYW4gdXNlIHRvIGhvbGQgY29uZmlnXG4vLyB2YXJpYWJsZXMgZm9yIHRoZSBhcHAuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbi8vIFRoaXMgaXMgYW5vdGhlciBleGFtcGxlL2N1c3RvbSBtb2R1bGUuIEFsbCBpdCBkb2VzIGlzIGNvbnNvbGUubG9nKClcbi8vIHdoYXRldmVyIHlvdSBwYXNzIHRvIGl0LlxudmFyIHNheSA9IHJlcXVpcmUoJy4vc2F5LmpzJyk7XG5cbi8qKlxuICogQ1VTVE9NIE1PRFVMRVNcbiAqXG4gKiBIZXJlIHdlJ3JlIHVzaW5nIG91ciB0d28gY3VzdG9tIGV4YW1wbGUgbW9kdWxlcyAoY29uZmlnLmpzIGFuZCBzYXkuanMpLiBDaGVja1xuICogdGhlIGNvbnNvbGUgdG8gc2VlIHRoZSBvdXRwdXQuXG4gKi9cbnNheSgnSXQgd29ya3MhJyk7XG5zYXkoY29uZmlnLnBhY2thZ2UubmFtZSArICcgdmVyLiAnICsgY29uZmlnLnBhY2thZ2UudmVyc2lvbik7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFja2FnZVwiOiByZXF1aXJlKFwiLi9wYWNrYWdlLmpzb25cIilcbn07IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJleGFtcGxlLWFwcFwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gIFwibWFpblwiOiBcIm1haW4uanNcIixcbiAgXCJhdXRob3JcIjogXCJqYXJlZEBldGhvZGUuY29tXCIsXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjguMS4zXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOC4xMVwiLFxuICAgIFwiZ3VscC11dGlsXCI6IFwiXjMuMC4zXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJ3YXRjaGlmeVwiOiBcIl4yLjMuMFwiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn07Il19
