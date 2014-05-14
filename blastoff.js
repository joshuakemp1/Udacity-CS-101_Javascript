// # Define a procedure, countdown, that takes a
// # positive whole number as its input, and prints
// # out a countdown from that number to 1,
// # followed by Blastoff!
// # The procedure should not return anything.
// # For this question, you just need to call
// # the procedure using the line
// # countdown(3)
// # instead of print countdown(3).


function countdown(input) {
  var counter = 1;
  var counter_2 = input;

  while (counter <= input) {
    console.log('>>>', counter_2--);
    if (counter_2 === 0) {
      console.log('BLASTOFF!!!');
    }
    counter++;
  }
}

(countdown(10));

