const mongoose = require('mongoose'); // mongoose is a module for mongodb, it allows us to talk to mongoDb
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({ // using mongoose to create a schema
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;