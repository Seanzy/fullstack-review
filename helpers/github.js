const request = require('request');
const config = require('../config.js');
const db = require('../database'); //require defaults to looking for index.js

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  
  console.log('3: got to getReposByUsername in helpers/github.js', username);

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request.get(options, function(err, githubObject) {
    if (err) {
      console.error(err, null);
    } else {
      console.log(null, githubObject.body);
      callback(githubObject);
    }
  });

}

module.exports.getReposByUsername = getReposByUsername;
