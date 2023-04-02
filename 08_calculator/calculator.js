const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((total, ele) => total += ele, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, ele) => total *= ele);
};

const power = function(x,y) {
  return x ** y;
};

const factorial = function(num) {
  let arr = [];

  if (num <= 0) return 1;

  for(i = num; i > 0; i--) arr.push(i);

  return arr.reduce((total, ele) => total *= ele);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
