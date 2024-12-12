const people = ['yoshi' , 'ryu' , 'khan', 'jawad'];
const ages = [20 , 21 , 22 , 23 , 24];

console.log(people);


// we have to manually export module
// module.exports = " hello";

// when we export this it gives hello in xyz
// console.log(xyz);

//1  only one value
// module.exports = people;

// 2 . In case of exporting multiples values
module.exports = {
  people , ages   
}