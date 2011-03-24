# jQuery Startr: A starter kit for your jQuery Development

jQuery Startr is a set of files to help you quickly get started with a new jQuery project. It aims to promote some basic best practices when working with jQuery, especially in the context of rather large applications. For that matter, I highly recommend checking out projects like Dojo, YUI or JavaScriptMVC (that is built on top of jQuery). Those libraries can provide a wide set of valuable tools that will most likely fulfill any of your complex application development needs whilst giving you some really robust guidelines to follow.

That being said, jQuery is effectively neutral when it comes to your structural methodology and does not describe or prevent any framework of application development, so you are free to choose your own to suit your needs. Alex Sexton [says it](http://jquerysbestfriends.com/#slide9) quite admirably:

> Srsly guys. Just because jQuery doesn't decide on a application structure for you, it doesn't mean that you don't need one.

and presented some of the [jQuery best friends](http://jquerysbestfriends.com) you could use right here, right now.

This starter kit aims to provide you a basic and robust structure to follow when starting a new JavaScript application, an application that makes uses of jQuery, not an application on top of jQuery. It includes a comprehensive list of tools that often come in handy when building a large application. This starter kit aims to piece them together to provide you a quick and solid way to get things up. JavaScript is not the only concern in modern front-end development, as such this starter kit also include the awesome html5boilerplate project which is based upon.

This repo is heavily inspired on [rmurphey](https://github.com/rmurphey)'s [dojo-boilerplate](https://github.com/rmurphey/dojo-boilerplate) repository which made me think of this project in the first place. Then, the idea grows up and exists mostly to respond to my own JavaScript develoment needs (as I'm going to use more and more these tools). It was also a great opportunity to dig in the new h5b build script and investigate on how requirejs optimization tool could be integrated. Huge thanks to [Miller Medeiros for his gist on showing how using ant to drive the optimizer](https://gist.github.com/825117) and the associated commentary of jlanglabde.

## Get Sarted

1. Clone the repository
3. Develop your project in `public/`
4. cd to the `build/` folder, then run `ant build` (or just `ant`) which will create and an optimized build of your app in  `publish/`. (run `ant minify` if you want further html compression)

For non github user, you could download [this](https://github.com/mklabs/jquery-startr/zipball/master) prepackaged build of jQuery Startr.

## Overview

* `build/` holds build-related script and tools (including requirejs)
* `public/` folder is where the actual development takes place.
* `support/` folder aims to contain all external libs and dependencies that this repo can use.
* `publish/` can be generated using the build script and contains an optimized version of `public/`. This folder is .gitignored by default in this repo.

For the time being, this repo contains a staring example using RequireJS, Sammy, jQuery and the hthml5boilerplate files structure and build script (configured in a way that it uses require's optimization tool for the JS part).

* The file `public/js/app/init.js` is the starting point for your development. You can write code in this file, use it to
express dependencies on other files, or both. Though, this file should be used only for bootstrapping code.
* The `src/index.html` file loads the file located at `src/js/app/init.js`, which in turn asynchronously loads `src/js/libs/jquery.js` and  `src/js/libs/sammy.js`. Sammy is registered as an ASM module, jQuery is registered as is internally by requirejs.
* The file `build/build.xml` (coming from h5b) is slightly modified to deal with RequireJS (by using ) optimization tool that reads the build file at `build/config/build.js`, which contains instructions to RequireJS on how to build the files for production. RequireJS creates a single file that includes jQuery, Sammy, your application's code, and all associated dependencies as specified within your application's code.

## Major Components

* HTML5Boilerplate - as a starter kit template
* jQuery - as a base core library
* jQuery UI - as a widget and UI library. focus on $.widget.
* RequireJS - as a dependency management and build system.
* Sammy - as a router and front controller solution.
* Undescore - as a fantastic and really solid utility library.
* Amplify - as a set of components (Request, Store, Pub/Sub) for data management and application communication.
* Modernizr - as a feature tester (part of HTML5Boilerplate) (also think of integrating yepnope).
* EasyXDM - cross domain communication.
* QUnit - solid unit testing solution.
* Templating - jQuery-tmpl by default, Mustache is also included and ready to use. underscore also includes a template system on its own. jQuery.View from JavaScriptMVC.

At a glance, jQuery Startr has the goal of allowing you to get started in a new project that makes use of these components (or not, depending on your needs) in less than 5 minutes. It also tries to promote some basic best practices while enforcing you to adopt a more modular and less DOM-centric approach of solving problems.

Most of these components are available as submodules in the `support/` folder.

## Customizing jQuery startr

Just like the really nifty HTML5Boilerplate which this project is based upon, jQuery Startr claims itself delete-key friendly :) Feel free to kill off any tools or parts you don't feel the need.

## TODO

1. Structure repo to either use submodule or a shell script to get all external dependencies (jQuery, jQuery UI, require, htmL5boilerplate, underscore and so on)
    * Partially done. Should considering including needed files from git modules in `libs` folder (and register them as require module).
2. Dig in build process and optimization build (integrate requirejs build script with h5b one)
    * Done. the h5b ant build script (target build/minify) drives the requirejs optimizer which takes care of js concat and minification (either using closure or uglify). It uses a special require 'environments' for the build process.
3. ASM for all external dependencies and components (maybe in another branch?)
4. docs, docs, docs!
5. comprehensive test suite
6. Examples and starter sample app
7. Work on specific components (that needs further development/testing)
    1. Router alternative to Sammy based on [Paul Irish's DOM-based Javascript Execution pattern](http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/)
    2. A simple model layer and RESTful abstraction.
    3. html5 data-* attributes to control the component initialization stuff (plugins, UI widgets, and app component stuff).