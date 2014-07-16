// # Define a procedure, replace_spy,
// # that takes as its input a list of
// # three numbers, and modifies the
// # value of the third element in the
// # input list to be one more than its
// # previous value.

var spy = [0,0,7];


function replace_spy(input) {
   input[2] = input[2] + 1;

   return input;


}



console.log(replace_spy(spy));