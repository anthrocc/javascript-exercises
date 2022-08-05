const ftoc = function(temp) {

  let convert = ((temp - 32) * (5/9));

  return Math.round(convert * 10) / 10;
};

const ctof = function(temp) {
  return Math.round(((temp * 1.8) + 32) *10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
