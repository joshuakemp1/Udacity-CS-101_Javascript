# Define a procedure, union,
# that takes as inputs two lists.
# It should modify the first input
# list to be the set union of the two
# lists. You may assume the first list
# is a set, that is, it contains no 
# repeated elements.

def union(input_1, input_2)

	result = []


	counter_1 = 0
	input_2_str = input_2.to_s

	while counter_1 < input_2_str.length
		if input_2_str[counter_1] === input_1[counter_1]
			result.push(input_1[counter_1])
			print result
		end
		counter_1 +=1
    end
end

puts
print union([7,1,8,3],[3,9,9,3,9,3,9,5])
puts
puts




# To test, uncomment all lines 
# below except those beginning with >>>.

#a = [1,2,3]
#b = [2,4,6]
#union(a,b)
#print a 
#>>> [1,2,3,4,6]
#print b
#>>> [2,4,6]
