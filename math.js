exports.sum = (a, b) => a+b;  // this is alsoo we know all about because we never confuse anytime

module.exports.sub = (a, b) => a-b;
module.exports.mul = (a, b) => a*b;
module.exports.div = (a, b) => a/b;
exports.g =  9.85;
exports.PI = 3.14;

// const sum = (a, b) => a+b;

// const sub = (a, b) => a-b;

// const mul = (a, b) => a*b;

// const div = (a, b) => a/b;

// const g = 9.09;

// const PI = 3.14;

// module.exports = sum,mul,sub,div,PI,g;  //this is also a good practice
// or


// let obj = {   //or   module.exports = {
//     sum: sum,
//     sub: sub,
//     g: g,
//     PI: PI,
//     mul: mul,
//     div: div,
// };

// module.exports = obj;

// console.log(sum,mul,sub,div,PI,g);