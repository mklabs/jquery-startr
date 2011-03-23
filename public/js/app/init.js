/**
 * This file is your application's base JavaScript file;
 * it is loaded into the page by the require (using data-main attribute)
 * in index.html. You can write code in this file, use it to
 * express dependencies on other files, or both. 
 *
 * Generally, this file should be used only for bootstrapping code;
 *
 * Actual functionality should be placed in other files inside
 * the public/js/app directory.
 *
 * You can specify dependencies on other by using proper 
 * dependencies array when using define/require
 *
 *    define(['dep1', 'dep2'], function(){})
 *
 *    require(['dep1', 'dep2'], function(){})
 *
 * The principal difference between require/define is that define 
 * is used to specify ASM module that you could later require in your own code.
 *
 * Finally, note that you do not need to express all of your
 * application's dependencies in this one file; individual files
 * can express their own dependencies as well.
 */
(function($, global, undefined) {
  
  // Configure RequireJS
  require({
    paths: {
      
      // todo: use special files version in libs folder? or specify path so that we can use directly support folder?
      // todo: also, should we register any external deps as a proper ASM module?
      'jquery': '../libs/jquery',
      'sammy':  '../libs/sammy'
    },
    
    // Load jQuery before any other scripts
    priority: ['jquery']
  });

  // Load scripts.
  require(['jquery', 'sammy'], function($, Sammy) {
    
    console.log('Dep ready', arguments);
    
    // Configure your bootstraping code in there..
    
    // Remember that actual functionality should be placed in other files inside the public/js/app directory.
    
    // Any functionality that depends on the DOM being available 
    // should be passed inside a function to $(document).ready (or use the $(fn) shortcut)
    $(function() {
      
      // Do your awesome stuff here
      
    });
    
  });
  
  
})(this.jQuery, this);