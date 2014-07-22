// # Define a procedure, sum_list,
// # that takes as its input a
// # list of numbers, and returns
// # the sum of all the elements in
// # the input list.



function sum_list(input) {

  var total = 0;

  // for (i in input) can be used although not a best practice

   for (var i = 0; i < input.length; i++) {
     total = total + input[i];
   }
   return total;
}

console.log(sum_list([1, 7, 4, 67, 8, 12, 3, 5]));







// #print sum_list([1, 7, 4])
// #>>> 12

// #print sum_list([9, 4, 10])
// #>>> 23

// #print sum_list([44, 14, 76])
// #>>> 134

