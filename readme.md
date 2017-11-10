A Hack Reactor project, by Sean Gurson 11/8/17. 

Setup

npm install --save adds it to this and --save-dev 
npm install -g webpack
create a copy of the config.example.js file called config.js and make sure it contains a valid github api token
npm run react-dev
npm run server-dev


What I learned:

You need to bind 'this' of react components to their proper context (the best place to do this is in the body of the Super class/ constructor, Search in this project).

To send an AJAX post, the AJAX object should include a data property. The data property will be an object with a data property whose value is the data you wish to pass (in this case, the parameter term, which is a string). data: {data: term}
https://www.npmjs.com/package/body-parser


Mongodb

mongodb gets saved to /data/db (use cd /data from Command line)

for CLI: type mongo 


> show dbs
admin    0.000GB
fetcher  0.000GB
local    0.000GB

> use fetcher
switched to db fetcher

> show collections
repos

db.repos.find (repos is your collection)

> db.repos.remove({}) to remove all documents

> db.repos.remove({})