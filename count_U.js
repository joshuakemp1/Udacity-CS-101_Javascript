// # Define a procedure, measure_udacity,
// # that takes as its input a list of strings,
// # and returns a number that is a count
// # of the number of elements in the input
// # list that start with the uppercase
// # letter 'U'.



function measure_udacity(input){
  var result = 0;


  for (var i = 0; i < input.length; i++) {
    // console.log(input[i].charAt(0));
    if (input[i].charAt(0) === 'U') {
    result = result += 1;
    }
}
return result;
}

console.log(measure_udacity(['Udacity', 'Bob', 'Udacity', 'Uosh']));


// #print measure_udacity(['Dave','Sebastian','Katy'])
// #>>> 0

// #print measure_udacity(['Umika','Umberto'])
// #>>> 2

 // else ((input[i][0] !== 'U')) {
 //      console.log('hi!');