// # Given the variable,

var days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31];

// # define a procedure, how_many_days,
// # that takes as input a number
// # representing a month, and returns
// # the number of days in that month.

function how_many_days(input) {
  if (input < 1 | input > 12) {
    return 'That is not a valid number!  Please enter a number from 1 - 12....and try again :-)';
  }
  return days_in_month[input - 1];
}

console.log(how_many_days(11));



// #print how_many_days(1)
// #>>> 31

// #print how_many_days(9)
// #>>> 30