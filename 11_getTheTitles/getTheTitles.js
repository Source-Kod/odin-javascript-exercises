const getTheTitles = function(books) {
  let na = [];

  books.forEach(element => {
    na.push(element.title);
  });

  return na;
};

// Do not edit below this line
module.exports = getTheTitles;
