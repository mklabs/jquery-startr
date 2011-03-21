# jQuery Startr: A starter kit for your jQuery Development

jQuery Startr is a set of files to help you quickly get started with a new jQuery project. It aims to promote some basic best practices when working with jQuery, especially in the context of rather large applications. For that matter, I higly recommend checking out projects like Dojo, YUI or JavaScriptMVC (that is built on top of jQuery). Those libraries can provide an immensable set of valuable tools that will most likely fullfil any of your complex application development needs whilst giving you some really robust guidelines to follow.

jQuery is effectively neutral when it comes to your structural methodology

That being said, jQuery is effectively neutral when it comes to your structural methodology and does not describe or prevent any framework of application development, so you are free to choose your own to suit your needs. Alex Sexton [says it](http://jquerysbestfriends.com/#slide9) quite admirably:

> Srsly guys. Just because jQuery doesn't decide on a application structure for you, it doesn't mean that you don't need one.

and presented some of the [jQuery best friends](http://jquerysbestfriends.com) you could use right here, right now.

This starter kit aims to provide you a basic and robust structure to follow when starting a new JavaScript application, an application that makes uses of jQuery, not an application on top of jQuery. It includes a comprehensive list of tools that often come in handy when building a large application. This starter kit pieces them together to provide you a quick and solid way to get things up. JavaScript is not the only concern in modern front-end development, as such this starter kit also include the awesome html5boilerplate project which is based upon.

## Quick Sart

1. Clone the repository
2. Init and update submodules to grab all required dependencies
3. Develop your project in `public/`
4. Run `util/build.sh` which will create and an optimised build of your app in `dist/`.

For non github user, you could download this prepackaged build of jQuery Startr.

For non UNIX users, an ant build script is also provided so that you can still run build process from a Java environment (and integrated in an IDE like Eclipse).

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

It also provides you tools and integrated solutions such as:

* Router alternative to Sammy based on [Paul Irish's DOM-based Javascript Execution pattern](http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/)
* An inheritance system for sharing code across modules and staying DRY
	* Object.create, modules and $.extend (to leverage the prototypal way <3)
	* Simple JavaScript Inheritence by John Resig.
* [Alex Sexton's bridge approach](http://alexsexton.com/?p=51) to leverage the inheritence model of your choice.
* A system for abstracting RESTful server communication with solutions either based on Dojo's store approach (JsonRest) or JavaScriptMVC's model ({findAll: '/examples/all', ...}`
* html5 data-* attributes to control the component initialization stuff (plugins, UI widgets, and app component stuff).

## Get Started

...

## Customizing jQuery startr

Just like the really nifty HTML5Boilerplate which this project is based upon, jQuery Startr claims itself delete-key friendly :) Feel free to kill off any tools or parts you don't feel the need.

## Goals and philosophy

It also provides some tools, tries to promote practices or way of doing things you should consider.

* Routing solution and MVC-ish pattern
	* Sammy for stateful and hash application (see how to integrate the new HTML5 History API)
	* Paul Irih's comprehensive DOM-Ready execution for more classical apps
* Clear patterns for code organization
	* The module pattern and a few object literals
* An inheritance system for sharing code across modules and staying DRY
	* Object.create, modules and $.extend (to leverage the prototypal way <3)
	* Simple JavaScript Inheritence by John Resig.
* A non-DOM-centric, loosely coupled API for communication between modules
	* pub/sub thanks to amplify's pubsub system
* A system for maintaining templates separate from JavaScript while interning them into the build to eliminate HTTP requests
	* text!requirejsdependency
	* think about automatic integration within $.widget
* A system for abstracting RESTful server communication
	* solution based on Dojo's store (especially JsonRest)
	* solution based on JavaScriptMVC's model. 
	* Think of making it transparent and integrated with amplify's request.
* For a UI-intensive project, a rich widget system pluggable to arbitrary data sources and designed with an easily-extended API
	* jQuery UI provides a powerfull system supporting inheritence and lifecyle management. Currently, it lacks templating and (fully-integrated) datasource. 
	* TODO: amplify's request + jQuery UI.
* i18n (internationalization)
	* jQuery UI for widget specific stuff
	* RequireJS for app related stuff.

[Rebecca Murphey outlined](http://www.quora.com/What-development-practices-can-make-a-large-jQuery-application-easy-or-difficult-to-maintain) a few poor practices that jQuery Startr tries to prevent:
	
* Use of anonymous function for event handlers. Anonymous functions are by definition not reusable, which leads to anti-DRY code. As such, this starter kit provides ways and example of using methods of objetcs for event handling (+ $.proxy)
* Force you to think in a non DOM-centric approach to solve problems. Instead it tries to force you thinking in a modular, component-based and object oriented approach.
* Prevent you from having string in your JavaScript code, especially strings of HTML. Thanks to text!requirejsdependency

so as to a few best practices that jQuery Startr tries to promote and provide:

* Create loosely coupled modules, manage dependencies and create production ready build of your code. Using a tool such as RequireJS answer most of this concern.
* Using a tool such as mustache.js for templating, and maintaining those templates separately from your JavaScript (tools such as Sammy provide functionality to pull these templates in at runtime). Also, requireJS text dependency plugin can prove usefull( while interning them in production builds).
* Incorporating an MVC-style approach, keeping data, presentation, and behavior code separate, promoting DRYer, reusable code.
	* In a stateful and hash application, Sammy + delegated controller offers a smart and flexible way to design an mvc-ish starter architecture
	* In a more classical application, Paul Irish's comprehensive DOM-Ready execution provides a simple, clean and really nice way of organizing bootsaping code.
	
At the very end, this projet is heavily based based on a lot of the posts like these....

* [On jQuery & Large Applications](http://blog.rebeccamurphey.com/on-jquery-large-applications) - Rebecca Murphey
* [On Rolling Your Own](http://blog.rebeccamurphey.com/on-rolling-your-own) - Rebecca Murphey
* [On "Rolling Your Own" Large jQuery Apps](http://alexsexton.com/?p=106) - Alex Sexton
* [Using Inheritance Patterns to Organize Large jQuery Applications](http://alexsexton.com/?p=51) - Alex Sexton
* [Writing the Perfect jQuery Plugin](http://jupiterjs.com/news/writing-the-perfect-jquery-plugin) - jupiterjs
* [Organizing A jQuery Application](http://jupiterjs.com/news/organizing-a-jquery-application) - jupiterjs
* [Building Large-Scale jQuery Applications](http://addyosmani.com/blog/large-scale-jquery/) - Addy Osmani
* [Automate firing of onload events](http://paulirish.com/2008/automate-firing-of-onload-events/) - Paul Irish
* [Markup-based unobtrusive comprehensive DOM-ready execution](http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/) - Paul Irish
* [Extending Paul Irish's comprehensive DOM-ready execution](http://www.viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution/) - Jason Garber

with a main focus on the following posts

* [On "Rolling Your Own" Large jQuery Apps](http://alexsexton.com/?p=106) - Alex Sexton
* [On Rolling Your Own](http://blog.rebeccamurphey.com/on-rolling-your-own) - Rebecca Murphey

Please keep in mind that this project and the guidelines that it tries to promote are fairly unopinionated, they're just suggestions and recommendations.