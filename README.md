# Example App

Basic example of using Browserify.

## Files

- **.gitignore** - Tells Git files and folders to ignore or not to ignore.
- **bundled.js** - The single "compiled" script that our HTML will require.
- **config.js** - A simple module that holds config items for our app.
- **gulpfile.js** - Gulp script that runs workflow tasks.
- **index.html** - Our HTML page.
- **main.js** - Our app entry point. It requires the rest of our dependencies/modules.
- **package.json** - This is for NPM. It describes our app and its dependencies.
- **say.js** - A basic/hello world module. It passes whatever you send it to `console.log()`.

## Set up app

Created the **package.json**:

```bash
npm init
```

Then created **main.js**. **main.js** is our app entry point.

## Browserify

### Installation

Installed **browserify**  globally:

```bash
npm install -g browserify
```

### Create custom modules

Created a couple custom modules (**say.js** and **config.js**). **main.js** will request these custom modules with `require()`:

```js
var config = require('./config.js');
var say = require("./say.js");
```

## Gulp

### Installation

Installed globally:

```bash
npm install --global gulp
```

### Gulpfile.js

Created gulpfile.js and installed its dependencies:

```bash
npm install --save-dev gulp gulp-util vinyl-source-stream browserify watchify
```

#### Tasks

- bundle - uses browserify to bundle up our JS.
- watch - calls bundle, then watches for any changes in our JS files and rebundles automatically.

### Usage

We'll use browserify to compile **main.js** into a new file, **bundled.js**, which will include **main.js** and all of its dependencies. But we'll use Gulp to do it for us:

```bash
gulp bundle
```

We just have to require **bundled.js** in our HTML.

Open index.html in your browser to run our app.