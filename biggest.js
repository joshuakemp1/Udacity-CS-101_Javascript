function biggest(input1, input2, input3) {
  if (input1 > input2) {
    if (input1 > input3) {
      return input1;
    }
  }
  if (input2 > input3) {
    return input2;
  }
  else {
    return input3;
  }
}

console.log(biggest(438, 1133, 347));
