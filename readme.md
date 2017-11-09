A Hack Reactor project, by Sean Gurson 11/8/17. 

//global packages wont show up in dependencies
//this is created by npm. go through this first. 
//npm install --save adds it to this and --save-dev 
//lines 7 and 8 sets up webpack and turns on watch, put it in a separate window
//line 8 tells nodemon to run. To run script type npm run scriptname 

What I learned:

You need to bind 'this' of react components to their proper context (the best place to do this is in the body of the Super class/ constructor, Search in this project).

To send an AJAX post, the AJAX object should include a data property. The data property will be an object with a data property whose value is the data you wish to pass (in this case, the parameter term, which is a string). data: {data: term}
https://www.npmjs.com/package/body-parser


