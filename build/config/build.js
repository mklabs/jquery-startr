({
    appDir: "../../public/js/",
    
    baseUrl: "app",
    
    dir: "../../publish/js",
    
    // Set paths for modules. If relative paths, set relative to baseUrl above.
    paths: {
      'jquery': '../libs/jquery',
      'sammy':  '../libs/sammy',
      'underscore':  '../libs/underscore',
      'amplify': '../libs/amplify',
      'amplify.core': '../libs/amplify/amplify.core',
      'amplify.request': '../libs/amplify/amplify.request',
      'amplify.store': '../libs/amplify/amplify.store'
    },
    
    // Comment out the optimize line if you want the code minified by UglifyJS
    optimize: "closure",

    modules: [{
      name: "main"
    }]
})