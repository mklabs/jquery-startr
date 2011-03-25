# jQuery Startr: A starter kit for your jQuery Development

This is a work in progress.

jQuery Startr is a set of files to help you quickly get started with a new jQuery project. It aims to promote some basic best practices when working with jQuery, especially in the context of rather large applications. For that matter, I highly recommend checking out projects like Dojo, YUI or JavaScriptMVC (that is built on top of jQuery). Those libraries can provide a wide set of valuable tools that will most likely fulfill any of your complex application development needs whilst giving you some really robust guidelines to follow.

This repo is heavily inspired on [rmurphey](https://github.com/rmurphey)'s [dojo-boilerplate](https://github.com/rmurphey/dojo-boilerplate) repository which made me think of this project in the first place. Then, the idea grows up and exists mostly to respond to my own JavaScript develoment needs (as I'm going to use more and more these tools). It was also a great opportunity to dig in the new h5b build script and investigate on how requirejs optimization tool could be integrated. Huge thanks to [Miller Medeiros for his gist on showing how using ant to drive the optimizer](https://gist.github.com/825117) and the associated commentary of jlanglabde.

## Get Sarted

1. Clone the repository
3. Develop your project in `public/`
4. cd to the `build/` folder, then run `ant build` (or just `ant`) which will create an optimized build of your app in  `publish/`. (run `ant minify` if you want further html compression)

For non github user, you could download [this](https://github.com/mklabs/jquery-startr/zipball/master) prepackaged build of jQuery Startr.

## Overview

* `build/` holds build-related script and tools (including requirejs)
* `public/` folder is where the actual development takes place.
* `support/` folder aims to contain all external libs and dependencies that this repo can use.
* `publish/` can be generated using the build script and contains an optimized version of `public/`. This folder is .gitignored by default in this repo.

For the time being, this repo contains a starting example using RequireJS, Sammy, jQuery and the hthml5boilerplate files structure and build script (configured in a way that it uses require's optimization tool for the JS part).

* The file `public/js/app/main.js` is the starting point for your development. You can write code in this file, use it to
express dependencies on other files, or both. Though, this file should be used only for bootstrapping code.
* The `src/index.html` file loads the file located at `src/js/app/main.js`, which in turn asynchronously loads `src/js/libs/jquery.js` and  `src/js/libs/sammy.js`. Sammy is registered as an ASM module, jQuery is registered as is internally by requirejs.
* The file `build/build.xml` (coming from h5b) is slightly modified to deal with RequireJS optimization tool that reads the build file at `build/config/build.js`, which contains instructions to RequireJS on how to build the files for production. RequireJS creates a single file that includes jQuery, Sammy, your application's code, and all associated dependencies as specified within your application's code.

## Major Components

* html5boilerplate - as a starter kit template
* Modernizr - as a feature tester (part of h5b)
* jQuery - as a base core library (part of h5b)
* QUnit - solid unit testing solution (part of h5b)
* jQuery UI - as a widget and UI library. focus on $.widget.
* RequireJS - as a dependency management and build system.
* Sammy - as a router and front controller solution.
* Undescore - as a fantastic and really solid utility library.
* Amplify - as a set of components (Request, Store, Pub/Sub) for data management and application communication.
* EasyXDM - cross domain communication.
* Templating - jQuery-tmpl by default, Mustache is also included and ready to use. underscore also includes a template system on its own. jQuery.View from JavaScriptMVC.
* jQuery Mockjax - as an handy mocking tool for ajax requests with jQuery

At a glance, jQuery Startr has the goal of allowing you to get started in a new project that makes use of these components (or not, depending on your needs) in less than 5 minutes. It also tries to promote some basic best practices while enforcing you to adopt a more modular and less DOM-centric approach of solving problems.

Most of these components are available as submodules in the [`support/` folder](https://github.com/mklabs/jquery-startr/tree/master/support).

## Customizing jQuery startr

Just like the really nifty HTML5Boilerplate which this project is based upon, jQuery Startr claims itself delete-key friendly :) Feel free to kill off any tools or parts you don't feel the need.

## To be done

[https://github.com/mklabs/jquery-startr/issues](https://github.com/mklabs/jquery-startr/issues)

