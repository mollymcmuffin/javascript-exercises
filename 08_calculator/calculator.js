const add = function(a,b) {
  let result = 0;
  result = a + b;
  return result;
};

const subtract = function(a, b) {
  let result = 0;
  result = a - b;
  return result;
};

const sum = function(array) {
  let result = 0;
  if (array.length !== 0){
    for (let i = 0; i< array.length; i++){
      result += array[i];
    }
    return result;
  }
  else return 0;
};

const multiply = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++){
    result *= array[i];
  }
  return result;
};

const power = function(a,b) {
  let result = 0;
  result = a**b;
  return result;
};

const factorial = function(num) {
	let i = num;
  let result = 1;
  if (num === 0) return 1;

  while (i !== 0){
    result *= i;
    i--;
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
