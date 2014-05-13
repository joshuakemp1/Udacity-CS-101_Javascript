function print_multiplication_table(input) {
  var counter = 1;
  while (counter <= input) {
     var second_counter = 1;
      while (second_counter <= input) {
          console.log(counter, " * ", second_counter , " = " ,counter * second_counter);
          second_counter = second_counter + 1;
      counter = counter + 1;
    }
  }
}
print_multiplication_table(8);



function print_multiplication_table(input) {
  var counter = 2;
  var result = input * counter;
  // var whole_number = input.toString;

  // var whole_number = input.toString();
  // var test_array = [];

  while (counter <= input) {
    result;
    // test_array.push(whole_number);

    counter++;
  }

  return result;
}

console.log(print_multiplication_table(5));
