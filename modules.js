// Modules and requires

//importing people.js file into modules.js file

// require function is used to import modules, libraries, or files into your code.

// const xyz = require('./people.js');
//use destructing
const {people,ages} = require('./people.js');

// console.log(xyz);   // gives us empty object when thers is no export from people.js
//after exports it gives us hello

// console.log(xyz);

// console.log(xyz.people);
console.log(people,ages);
// console.log(xyz.ages);
