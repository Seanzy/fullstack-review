var path = require('path'); // the path of the
var SRC_DIR = path.join(__dirname, '/client/src'); // where it'g going to start looking
var DIST_DIR = path.join(__dirname, '/client/dist'); // where evrything will go

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, //where transpilation starts, either js or jsx file, using links from the current file, (index.js links to another component to component to component, need to link
  output: {
    filename: 'bundle.js', // this is in index.html
    path: DIST_DIR // path where to put
  },
  module : {
    loaders : [ //what we want webpack to do with our files
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader', //babel transpiler
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

//we'll be given this file frequently. 