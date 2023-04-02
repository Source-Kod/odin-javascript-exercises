const fibonacci = function(num) {
  let current_num = 1;
  let last_num = 0;

  if (num < 0) return 'OOPS';

  for (i=1; i < num; i++) {
    let temp = current_num;
    current_num += last_num;
    last_num = temp;
  };
  return current_num;
};

// Do not edit below this line
module.exports = fibonacci;
