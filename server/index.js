const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('../helpers/github.js');
const Save = require('../database/index.js')

//import helpers/github.js?

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist')); //serves up static files, looks in dist folder, looking for an index file and serves it first


//middleware takes the request and does something to it, then it continues it down the chain of things to do, until we tell express we're done with the middleware. 

// app.get('/', function(req, res) {
//   console.log('sean');
// });

// app.get('/', function(req, res) {
    
// })

app.post('/repos', function (req, res) {
  // console.log(req);
  
  helpers.getReposByUsername(req.body.data, function(githubObject) {
    Save.save(githubObject);
  });
  console.log('req data', req.body);
  //cant run save here because they're async
  
  //save()
  
  res.end('got here');
  
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  
  Save.repoFinder(function(repos) {
    res.json(repos);
  });
  // res.end(); // this runs immediately after line 44 if we don't pass in a callback and utilize it in repoFinder()
  
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
  // console.log('1: Sean was here');
});

//our functions will serve as controllers that go to the github api and brings it back 
//make sure webpack and nodemon are available to run




