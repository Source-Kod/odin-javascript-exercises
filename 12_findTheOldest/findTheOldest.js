const findTheOldest = function(people) {

  return people.reduce((oldest, current) => {
    const current_year = 2023;
    const current_age = (current.yearOfDeath || current_year) - current.yearOfBirth;
    console.log(current.name + current_age)
    const oldest_age = (oldest.yearOfDeath || current_year) - oldest.yearOfBirth;

    return current_age > oldest_age ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
