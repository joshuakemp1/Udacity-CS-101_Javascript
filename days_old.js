// # By Websten from forums
// #
// # Given your birthday and the current date, calculate your age in days. 
// # Account for leap days. 
// #
// # Assume that the birthday and current date are correct dates (and no 
// # time travel). 
// #

// In the Gregorian calendar 3 criteria must be taken into account to identify leap years:

//    The year is evenly divisible by 4;
//    If the year can be evenly divided by 100, it is NOT a leap year, unless;
//    The year is also evenly divisible by 400. Then it is a leap year.


function daysBetweenDates(year1, month1, day1, year2, month2, day2) {
  var counter_1 = year1 + 1;
  var days_past = 0;

  while (counter_1 < year2) {
    days_past = days_past + 365;
    if (leap_Year(counter_1)) {
      days_past = days_past + 1;
    }
    counter_1++;
  }
  days_past = daysLeft(month1, day1, year1) + days_past;
  days_past = daysPast(month2, day2, year2) + days_past;

  return days_past;
}

console.log(daysBetweenDates(1985, 4, 7, 2014, 6, 26));



function leap_Year(year) {

  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return true;

}


function daysLeft(month, day, year) {
  var q;

  if (leap_Year(year)) {
    q = 1;
  }
  else {
    q = 0;
  }

  var year_length = 365 + q;


  var days_past = [0, 31, 28 + q, 31, 30, 31, 30, 31, 31, 30, 31, 30 ];

  var counter_1 = 0;
  var days_elapsed = 0;

  while (counter_1 <= month) {
    days_elapsed = days_elapsed + days_past[counter_1];
    counter_1++;
  }
  days_elapsed = days_elapsed + day;
   var days_old = year_length - days_elapsed;

   return days_old;
}




function daysPast(month, day, year) {
  var q;

  if (leap_Year(year)) {
    q = 1;
  }
  else {
    q = 0;
  }

  var year_length = 365 + q;


  var days_past = [0, 31, 28 + q, 31, 30, 31, 30, 31, 31, 30, 31, 30 ];

  var counter_1 = 0;
  var days_elapsed = 0;

  while (counter_1 <= month) {
    days_elapsed = days_elapsed + days_past[counter_1];
    counter_1++;
  }
  days_elapsed = days_elapsed + day;

   return days_elapsed;
}


