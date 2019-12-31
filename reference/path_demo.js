const path = require('path');

// Returns base file name
console.log(path.basename(__filename));

//Returns directory name
console.log(path.dirname(__filename));

//File Extention
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename).base);

//Cocatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));