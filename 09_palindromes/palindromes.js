const palindromes = function (str) {
  new_string = str.toLowerCase().replace(/[^a-z]/g, '');

  return new_string === new_string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
