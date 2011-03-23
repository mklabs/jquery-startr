({
    appDir: "../../js/",
    
    baseUrl: "app",
    
    dir: "../../webapp-buildwtf",
    
    //Set paths for modules. If relative paths, set relative to baseUrl above.
    paths: {
      
      // todo: use special files version in libs folder? or specify path so that we can use directly support folder?
      // todo: also, should we register any external deps as a proper ASM module?
      'jquery': '../libs/jquery',
      'sammy':  '../libs/sammy',
    },
    
    
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "closure",

    modules: [
        {
            //If you have multiple pages in your app, you may
            //want jQuery cached separately from the optimized
            //main module. In that case, uncomment the exclude
            //directive below.
            //exclude: ["jquery"],
            name: "init"
        }
    ]
})

/* * /
({
  appDir: '../src/',

  baseUrl: 'js',

  dir: '../dist/',

  pragmas: {
    asynchLoader: true
  },

  locale: 'en-us',

  packages: [
    {
      name: 'dojo',
      location: 'dojo-release-1.6.0-src/dojo',
      main: 'lib/main-browser',
      lib: '.'
    },
    {
      name: 'dijit',
      location: 'dojo-release-1.6.0-src/dijit',
      main: 'lib/main',
      lib: '.'
    }
  ],

  modules: [
    {
      name: 'app/_base'
    }
  ]
})
/* */