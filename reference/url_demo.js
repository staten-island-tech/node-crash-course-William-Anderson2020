const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized url
console.log(myUrl.href);

//Host
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Paramater object
console.log(myUrl.searchParams);

//Add parameter
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through parameters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));