// var list = ['Moe', 'Larry', 'Curly'];
// console.log(list);


// # Given the variable,

var days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31];

// # define a procedure, how_many_days,
// # that takes as input a number
// # representing a month, and returns
// # the number of days in that month.



function how_many_days(input) {
  if (input < 1 | input > 12) {
  return 'That is not a valid number of days for a month!...please pick a number between 1 - 12 and try again!';
}
  if (input === 1) {
    return days_in_month[0];
  }
  if (input === 2) {
    return days_in_month[1];
  }
  if (input === 3) {
    return days_in_month[2];
  }
  if (input === 4) {
    return days_in_month[3];
  }
  if (input === 5) {
    return days_in_month[4];
  }
  if (input === 6) {
    return days_in_month[5];
  }
  if (input === 7) {
    return days_in_month[6];
  }
  if (input === 8) {
    return days_in_month[7];
  }
  if (input === 9) {
    return days_in_month[8];
  }
  if (input === 10) {
    return days_in_month[9];
  }
  if (input === 11) {
    return days_in_month[10];
  }
  if (input === 12) {
    return days_in_month[11];
  }
  return false;
}


console.log(how_many_days(110));


// #>>> 31

// #print how_many_days(9)
// #>>> 30

