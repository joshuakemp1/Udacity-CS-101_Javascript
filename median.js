// # Define a procedure, median, that takes three
// # numbers as its inputs, and returns the median
// # of the three numbers.

// # Make sure your procedure has a return statement.

function larger(input_1, input_2) {
  if (input_1 > input_2) {
    return input_1;
  }
  else
  {
    return input_2;
  }
}

function largest(input_1, input_2, input_3) {
  return (larger(input_1, larger(input_2, input_3)));
}


function middle(input_1, input_2, input_3) {
  big = largest(input_1, input_2, input_3);
  if (big === input_1) {
    return larger(input_2, input_3);
  }
  if (big === input_2) {
    return larger(input_1, input_3);
  }
    else {
      return larger(input_1, input_2);
    }

}

console.log(middle(150, 190, 114));


