// # Define a procedure, union,
// # that takes as inputs two lists.
// # It should modify the first input
// # list to be the set union of the two
// # lists. You may assume the first list
// # is a set, that is, it contains no 
// # repeated elements.

function union(input_1, input_2) {

var	result = [];
var counter_a = 0;

while (counter_a < input_1.length) {
      result.push(input_1[counter_a]);
      counter_a +=1;
    }

	var counter_1 = 0;
  var counter_2 = 0;

  var unique;

	while (counter_2 < input_2.length) {
    counter_1 = 0;
    unique = true;
		while (counter_1 < result.length) {
      console.log(counter_1,counter_2);
      if (result[counter_1] === input_2[counter_2]){
        unique = false;
      }
      counter_1 +=1;
    }
    if (unique){
      result.push(input_2[counter_2]);
    }
    counter_2 +=1;
	}
  return result;
}

console.log(union([7,1,8,3],[3,9,9,3,11,9,3,9,5]));





// # To test, uncomment all lines 
// # below except those beginning with >>>.

// #a = [1,2,3]
// #b = [2,4,6]
// #union(a,b)
// #print a 
// #>>> [1,2,3,4,6]
// #print b
// #>>> [2,4,6]






// if(input_2[counter_1] === input_1[counter_1]) {
//       result.push(input_1[counter_1]);
//     }