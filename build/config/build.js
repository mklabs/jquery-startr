({
    appDir: "../../public/js/",
    
    baseUrl: "app",
    
    dir: "../../publish/js",
    
    //Set paths for modules. If relative paths, set relative to baseUrl above.
    paths: {
      
      // todo: use special files version in libs folder? or specify path so that we can use directly support folder?
      // todo: also, should we register any external deps as a proper ASM module?
      'jquery': '../libs/jquery',
      'sammy':  '../libs/sammy'
    },
    
    
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "closure",

    modules: [{
      name: "init"
    }]
})