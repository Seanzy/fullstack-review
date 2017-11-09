const mongoose = require('mongoose'); // mongoose is a module for mongodb, it allows us to talk to mongoDb
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({ // using mongoose to create a schema
  id: Number, 
  name: String, 
  owner: String,
  description: String,
  
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (githubObject) => { //githubObject is an array of objects 
  
  // for (var repoObj in githubObject) {
  //   var repo = new Repo(repoObj);
    
  //   repo.save()
  // }
  
  
  
  
}

module.exports.save = save;

//to see the structure of the githubObject, go to https://api.github.com/users/seanzy/repos

// app.post("/addname", (req, res) => {
//  var myData = new User(req.body);
//  myData.save()
//  .then(item => {
//  res.send("item saved to database");
//  })
//  .catch(err => {
//  res.status(400).send("unable to save to database");
//  });
// });