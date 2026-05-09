const sum = (a, b) => a+b;

const sub = (a, b) => a-b;

const mul = (a, b) => a*b;

const div = (a, b) => a/b;

const g = 9.09;

const PI = 3.14;

// module.exports = sum,mul,sub,div,PI,g;
// or
let obj = {
    sum: sum,
    sub: sub,
    g: g,
    PI: PI,
    mul: mul,
    div: div,
};

module.exports = obj;

// console.log(sum,mul,sub,div,PI,g);