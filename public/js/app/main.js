/**
 * This file is your application's base JavaScript file;
 * it is loaded into the page by requirejs (using data-main attribute)
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
    
    baseUrl: 'js/',
    
    // specify any external libs path (consider using a layer?)
    paths: {
      'jquery': 'libs/jquery',
      'sammy':  'libs/sammy',
      'underscore':  'libs/underscore',
      'amplify': 'libs/amplify',
      'amplify.core': 'libs/amplify/amplify.core',
      'amplify.request': 'libs/amplify/amplify.request',
      'amplify.store': 'libs/amplify/amplify.store'
    },
    
    // Load jQuery before any other scripts
    priority: ['jquery']
  });
  
  // Load scripts.
  require(['jquery', 'sammy', 'underscore', 'amplify'], function($, Sammy, _, amplify) {
    
    // Configure your bootstraping code in there..
    // Remember that actual functionality should be placed in other files inside the public/js/app directory.
    
    // Quick test on these deps
    console.log('Deps ready', arguments);
    
    $(function() {
      
      // Any functionality that depends on the DOM being available 
      // should be passed inside a function to $(document).ready (or use the $(fn) shortcut)
      // Do your awesome stuff here
      
    });
    
  });
  
  
})(this.jQuery, this);