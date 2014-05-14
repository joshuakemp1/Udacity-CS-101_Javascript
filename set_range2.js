// # The range of a set of values is the maximum value minus the minimum
// # value. Define a procedure, set_range, which returns the range of three input
// # values.

// # Hint: the procedure, biggest which you coded in this unit
// # might help you with this question. You might also like to find a way to
// # code it using some built in functions.

var array_of_numbers = [10, 11, 20];


function set_range(input) {

  var biggest_num = Math.max.apply(null, array_of_numbers);

  var smallest_num = Math.min.apply(null, array_of_numbers);

  return biggest_num - smallest_num;
}

console.log(set_range(array_of_numbers));