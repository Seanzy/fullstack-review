const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist')); //serves up static files, looks in dist folder, looking for an index file and serves it first


//middleware takes the request and does something to it, then it continues it down the chain of things to do, until we tell express we're done with the middleware. 
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//our functions will serve as controllers that go to the github api and brings it back 
//make sure webpack and nodemon are available to run