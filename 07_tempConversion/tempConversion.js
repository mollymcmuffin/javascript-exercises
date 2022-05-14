const ftoc = function(f) {
  let result = 0;
  result = (f - 32)*(5/9);
  result = Math.round(result*10)/10;
  return result;
};

const ctof = function(c) {
  let result = 0;
  result = c* (9/5) + 32;
  result = Math.round(result*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
