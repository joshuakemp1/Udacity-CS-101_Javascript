// # Define a procedure, find_element,
// # that takes as its inputs a list
// # and a value of any type, and
// # returns the index of the first
// # element in the input list that
// # matches the value.

// # If there is no matching element,
// # return -1.



// var _ = require('lodash');



// function biggest(input) {
//   return _.max(input);
// }

// console.log(biggest([4,7,19,11]));



// fruits.indexOf("Apple");


function find_element(input_1, input_2) {
    return input_1.indexOf(input_2);


}

console.log(find_element(['alpha','beta', 'gamma'],'gamma'));




function find_element_1(input_1, input_2) {
	var counter = 0;

	while(counter < input_1.length) {
		if (input_1[counter] === input_2) {
			return counter;
		}
		counter += 1;
	}
	return -1;

}

console.log(find_element_1(['bobo', 'bonny', 'ben', 'ab', 'c'],'ab'));

// #print find_element([1,2,3],3)
// #>>> 2

