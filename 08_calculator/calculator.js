const add = function(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result;
  result = num1 - num2;
  return result;
};

const sum = function(sum_list) {
	let result = 0;
  sum_list.map(num => {
    result += num;
  });
  return result;
};

const multiply = function(mul_list) {
  let result = 0;
  if (mul_list.length > 0) {
    result = 1;
    mul_list.map(num => {
      result *= num;
    });
  }
  return result;

};

const power = function(num, pow) {
	let result = 1;
  let i = pow;
  while(i > 0){
    result *= num;
    i--;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  if(num > 1){
    let i = 1;
    while (i <= num) {
      result *= i;
      i++;
    }
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
