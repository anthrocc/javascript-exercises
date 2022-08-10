const add = function(x, y) {
  return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(arr) {
  var arrSum = 0;

  for(let i = 0; i < arr.length; i++) {
    arrSum = arrSum + arr[i];
  }

  return arrSum;
};

const multiply = function(arr) {
  var arrMult = 1;

  for(let i = 0; i < arr.length; i++) {
    arrMult = arrMult * arr[i];
  }

  return arrMult;
};

const power = function(x, y) {
	return (Math.pow(x, y));
};

const factorial = function(x) {
  let result = 1;

  for (let i = 2; i <= x; i++) {
    result = result * i;
  }

  return result;
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
