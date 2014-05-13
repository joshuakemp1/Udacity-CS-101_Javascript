// # 2 GOLD STARS

// # Define a procedure, print_multiplication_table,
// # that takes as input a positive whole number, and prints out a multiplication,
// # table showing all the whole number multiplications up to and including the
// # input number. The order in which the equations are printed matters.

// # Hint: You can not add an integer and a string, but in homework 1.9
// # you came across a method, str, for turning an integer into a string.


function print_multiplication_table(input) {
  var counter = 1;

  while (counter <= input) {
    var second_counter = 1;
    while (second_counter <= input) {

      console.log(counter, '*' ,second_counter, '=', counter * second_counter);

    counter++;
    second_counter++;
    }
  }
}

(print_multiplication_table(5));