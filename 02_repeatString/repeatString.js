const repeatString = function(str, int) {

  if(int<0) {
    return 'ERROR';
  }

  return str.repeat(int);
}

// Do not edit below this line
module.exports = repeatString;
