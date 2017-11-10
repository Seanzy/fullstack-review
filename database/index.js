const mongoose = require('mongoose'); // mongoose is a module for mongodb, it allows us to talk to mongoDb
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({ // using mongoose to create a schema
  id: Number, 
  name: String, 
  owner: String,
  description: String,
  avatar_url: String,
  html_url: String,
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (githubObject) => { //githubObject is an array of objects 
  
  var repoArray = [];
  var parsedRepos = JSON.parse(githubObject.body); //array of repo objects
  
  for (var i = 0; i < parsedRepos.length; i++) {
    var repoObj = {};
    
    repoObj.id = parsedRepos[i].id; 
    repoObj.name = parsedRepos[i].name;
    repoObj.owner = parsedRepos[i].owner.login;
    repoObj.description = parsedRepos[i].description;
    repoObj.avatar_url = parsedRepos[i].avatar_url;
    repoObj.html_url = parsedRepos[i].html_url;
    
    var repo = new Repo(repoObj); //new document
    
    repo.save(function (err) {
      if (err) {
        console.log(err); 
      } else {
        //saved
      }
    })
    
    repoArray.push(repoObj);
  }
    
  console.log('bbbbbbbbb', repoArray);
  
}

var repoFinder = function(callback) { //needs to take in a callback 
  Repo.find(function(err, repos) {
    if (err) {
      console.log(err);
    } else {
      console.log('*******', repos);
      callback(repos);
    }
  }).
  // .sort({'name: -1'})
  limit(25).
  sort({'name': 1});
  
// var initialize
  
}

module.exports.save = save;
module.exports.repoFinder = repoFinder; //export a function to encapsulate the get-25-repo logic

