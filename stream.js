const fs = require('fs');

// sets up where we are reading data from
// const readStream = fs.createReadStream('./docs/blog3.txt');
const readStream = fs.createReadStream('./docs/blog3.txt' , {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// .on is an event listener , this time listening to a data event
readStream.on('data' , (chunk) => {

// data is sent in chunks i.e NETFLIX     
console.log('------- NEW CHUNK --------');
console.log(chunk);    // because we use utf8 above

// console.log(chunk.toString());

//writing the data that we read from and received from blog3

writeStream.write('----NEW CHUNK -------');
writeStream.write(chunk);


})

// above work done in just one line by using pipe

// pipe
// when we are passing data directly from a readable to a writeable stream

readStream.pipe(writeStream);