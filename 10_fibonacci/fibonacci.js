const fibonacci = function(num) {

    if(num < 0) {
        return "OOPS";
    }

    if(isNaN(num)) {
        num = Number(num);
    }

    var a = 1, b = 0, temp;

    while (num > 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
