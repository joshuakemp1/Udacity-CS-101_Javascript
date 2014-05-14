// # The range of a set of values is the maximum value minus the minimum
// # value. Define a procedure, set_range, which returns the range of three input
// # values.

// # Hint: the procedure, biggest which you coded in this unit
// # might help you with this question. You might also like to find a way to
// # code it using some built in functions.

// var array_of_numbers = [4, 9, 17];


// function set_range(input_1, input_2, input_3) {

//   var range = array_of_numbers.slice(0, 3);


//   return range;
// }

// console.log(set_range(array_of_numbers));

var _ = require('lodash');

var ranger = _.range(4);

console.log(ranger);

