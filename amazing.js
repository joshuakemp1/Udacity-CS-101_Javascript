// Write a method named encode(str) which takes in a string and returns an array of pairs: each pair contains the next distinct letter in the string, and the number consecutive repeats.



function encode(input) {
  var the_array = [];
  var counter_1 = 0;
  var counter_2 = 0;
  var current_letter = " ";


  while (counter_1 < input.length) {
    if (current_letter === input[counter_1]) {
    counter_2++;
    }
    else {
      if (counter_2 !== 0) {
        the_array.push([current_letter, counter_2]);
      }
      counter_2 = 1;
      current_letter = input[counter_1];
    }
    counter_1++;
  }
  return the_array;
}

console.log(encode("aaabbbbbbbbbbbbbbfffffffffffffyyyyyyyyyyyyyyy"));


// encode("aaabbcbbaaa") ==
//   [["a", 3], ["b", 2], ["c", 1], ["b", 2], ["a", 3]]
// encode("aaaaaaaaaa") == [["a", 10]]
// encode("") == []