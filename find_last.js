// # Define a procedure, find_last, that takes as input
// # two strings, a search string and a target string,
// # and returns the last position in the search string
// # where the target string appears, or -1 if there
// # are no occurences.
// #
// # Example: find_last('aaaa', 'a') returns 3

// # Make sure your procedure has a return statement.

function find_last(input_1, input_2) {

var first_occurence = input_1.indexOf('ff');
var last_occurence = input_1.indexOf('ff', first_occurence + 1);

  return last_occurence;
}
console.log(find_last('fjfjffjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjjfjfjfjfjfjfjfjfjfjfjfjfjffjfjfjfjfjfjfjf', 'ff'));