# jQuery Startr: Major Components

This `support/` folder aims to contain all external libs and dependencies that jQuery Startr can use.

These dependencies are referenced as git submodule.

Running this command from the project's root:

    git subomdule update --init
    
will download all of these dependencies in the `support/` folder. This step is optional since the `public/` folder is structured in a way that it includes most of these by default (for now h5b files, jQuery, sammy core, qunit, requirejs and a bootstrap file). The `build/` folder refers to the new html5boilerplate build script which is configured to work in a RequireJS environment (more in `build/config/build.js` and `build/config/project.properties` files).

jQuery, Modernizr and QUnit are part of html5boilerplate, as such they're not directly referenced as submodules.

## HTML5Boilerplate - v1.0

**Version: 1.0** 

As a starter kit template. jQuery Startr tries to leverage html5boilerplate file structure (and most importantly its fantastic build script used alongside require optimizisation build).

> [HTML5 Boilerplate](http://html5boilerplate.com/) is the professional badass's base HTML/CSS/JS template for a fast, robust and future-proof site.
After more than three years in iterative development, you get the best of the best practices baked in: cross-browser normalization, performance optimizations, even optional features like cross-domain Ajax and Flash. A starter apache .htaccess config file hooks you the eff up with caching rules and preps your site to serve HTML5 video, use @font-face, and get your gzip zipple on. Boilerplate is not a framework, nor does it prescribe any philosophy of development, it's just got some tricks to get your project off the ground quickly and right-footed.

### jQuery - v1.5.1

**Version: 1.5.1**

As a base core library.

> [A fast, concise, library](http://jquery.com) that simplifies how to traverse HTML documents, handle events, perform animations, and add AJAX.

### Modernizr - v1.7

**Version: v1.7**

> [Modernizr](http://modernizr.com/) is a JavaScript library that allows you to use CSS3 and HTML5 features while maintaining a fine level of control over browsers that don't support them yet.

It will allow you to feature detect HTML5 and CSS3 features, with handy css and javascript hooks.

### QUnit - v1.0

**Version: v1.0**

Handy and easy-to-use JavaScript unit testing framework.

> [QUnit](https://github.com/jquery/qunit) is a powerful, easy-to-use, JavaScript test suite. It's used by the jQuery project to test its code and plugins but is capable of testing any generic JavaScript code (and even capable of testing JavaScript code on the server-side).

## jQuery UI - v1.8.11

**Version: v1.8.11**

As a widget/UI library. The fantastic widget factory is greatly recommended, the jQuery UI CSS Framework could also be used to provide a multi-themable UI to your application (not only applied on widgets stuff). jQuery Startr aims to include example and starter template to help you do that.

> [jQuery UI](http://jqueryui.com) provides abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets, built on top of the jQuery JavaScript Library, that you can use to build highly interactive web applications.

## RequireJS - v0.24.0

**Version: v0.24.0**

As main script loading solution. Provides a fantastic "module loader", dependency management and build system.

> [RequireJS](http://requirejs.org/) is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

## Sammy.js - v0.6.3

**Version: v0.6.3**

As a full-featured router. Sammy’s routes really help organize your jQuery. Make building complex and stateful jQuery application a breeze.

> [Sammy](http://sammyjs.org/) is a tiny javascript framework built on top of jQuery inspired by Ruby's [Sinatra](http://sinatrarb.com/). It's RESTful Evented Javascript.

## Underscore - v1.1.5

**Version: v1.1.5**

As a fantastic and very solid utility library.

> [Underscore](http://documentcloud.github.com/underscore/) is a utility-belt library for JavaScript that provides a lot of the functional programming support that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects. It's the tie to go along with jQuery's tux.

## Amplify - v1.0a1

**Version: v1.0alpha**

As a set of well designed components (Request, Store, Pub/Sub) for data management and application communication.

> [Amplify](http://amplifyjs.com/) is a set of components designed to solve common web application problems with a simplistic API. Amplify's goal is to simplify all forms of data handling by providing a unified API for various data sources. Amplify's store component handles persistent client-side storage, using standards like localStorage and sessionStorage, but falling back on non-standard implementations for older browsers. Amplify's request adds some additional features to jQuery's ajax method while abstracting away the underlying data source.

 

## easyXDM - v2.4.10.103

**Version: v2.4.10.103**

Kind of the ideal cross-domain solution.

> [easyXDM](http://easyxdm.net/) is a Javascript library that enables you as a developer to easily work around the limitation set in place by the Same Origin Policy, in turn making it easy to communicate and expose javascript API’s across domain boundaries.

## Modernizr - v1.7

**Version: v1.7**

> [Modernizr](http://modernizr.com/) is a JavaScript library that allows you to use CSS3 and HTML5 features while maintaining a fine level of control over browsers that don't support them yet.

It will allow you to feature detect HTML5 and CSS3 features, with handy css and javascript hooks.

## QUnit - v1.0

**Version: v1.0**

Handy and easy-to-use JavaScript unit testing framework.

> [QUnit](https://github.com/jquery/qunit) is a powerful, easy-to-use, JavaScript test suite. It's used by the jQuery project to test its code and plugins but is capable of testing any generic JavaScript code (and even capable of testing JavaScript code on the server-side).

## jQuery-tmpl - beta1

**Version: beta 1**

> [jQuery templates](http://api.jquery.com/category/plugins/templates/) contain markup with binding expressions ('Template tags'). Templates are applied to data objects or arrays, and rendered into the HTML DOM.

## Mustache - v0.3

**Version: v0.3**

[Mustache.js](https://github.com/janl/mustache.js/)

> What could be more logical awesome than no logic at all?


#### Others to consider

* Script loading
  * LABjs for faster script loading for those who don't need/want ASM support.
  * yepnope for elegant and powerful conditional script loading solution
  
* Templating
  * Include jQuery.View from JMVC
  * haml-js and other popular templating solution
  
* Testing
  * Jasmine
  * ...