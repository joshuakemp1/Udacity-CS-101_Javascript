# // # Define a procedure, measure_udacity,
# // # that takes as its input a list of strings,
# // # and returns a number that is a count
# // # of the number of elements in the input
# // # list that start with the uppercase
# // # letter 'U'.



def measure_udacity(input)
  result = 0

  for i in input do
    if i[0] == 'U'
       result = result +=1
    end
  end
  return result
end


# for (var i = 0; i < input.length; i++) {
#     // console.log(input[i].charAt(0));
#     if (input[i].charAt(0) === 'U') {
#     result = result += 1;
#     }
#     return result;


puts measure_udacity(['Udacity', 'Bob', 'Udacity', 'josh'])


# // #print measure_udacity(['Dave','Sebastian','Katy'])
# // #>>> 0

# // #print measure_udacity(['Umika','Umberto'])
# // #>>> 2

#  // else ((input[i][0] !== 'U')) {
#  //      console.log('hi!');