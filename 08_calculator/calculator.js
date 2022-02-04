const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
  if(input.length === 0) {
    return 0;
  } else if(input.length === 1) {
  return input[0];
  } else {
    const sum = (a, b) => a + b;
    return input.reduce(sum);
  }
};

const multiply = function(input) {
  const product = (a,b) => a * b;
  return input.reduce(product);
};

const power = function(a,b) {
  let product = a;
	for (let i = 1; i < b; i++) {
    product = product*a;  
  }
  return product;
};

const factorial = function(a) {
  let fact = 1;
	if(a === 0 || a === 1){
    return 1;
  } else{
    for (let i = 1; i <= a; i++){
      fact = fact * i;
    }
  }
  return fact;
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
