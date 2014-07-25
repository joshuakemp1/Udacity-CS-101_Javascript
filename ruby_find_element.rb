# Define a procedure, find_element,
# that takes as its inputs a list
# and a value of any type, and
# returns the index of the first
# element in the input list that
# matches the value.

# If there is no matching element,
# return -1.

def find_element(input_1, input_2)
  if input_1.find_index(input_2) == nil
    return -1
  end
  input_1.find_index(input_2)
end

puts find_element(['bob','alpha','beta'],'alpha')


#print find_element([1,2,3],3)
#>>> 2

#print find_element(['alpha','beta'],'gamma')
#>>> -1