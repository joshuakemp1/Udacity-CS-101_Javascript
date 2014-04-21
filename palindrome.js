// # test case 2
// # word = "madman" # uncomment this to test

// ###
// # YOUR CODE HERE. DO NOT DELETE THIS LINE OR ADD A word DEFINITION BELOW IT.
// ###




var is_palindrome = function reverse(s) {
  return s.split('').reverse().join('') === s;

};


// if (is_palindrome === true) {
//   console.log('YEAH!');
// }

// if (is_palindrome === true)
//     console.log('FIZZER!');
var x = (is_palindrome('bob'));
if (x === true) {
  console.log('YES!!!');
}
else {
    console.log('NOPE!');
  }





