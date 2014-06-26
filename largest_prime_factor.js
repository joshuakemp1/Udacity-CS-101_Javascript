function largest_prime_factor(input) {
  counter_1 = 2;
  largest_prime = 1;

  while (counter_1 < input) {
    if (input % counter_1 === 0) {
      largest_prime = counter_1;
      input = input / counter_1;
    }
    else {
      counter++;
    }
  }
  return largest_prime;

}

console.log(largest_prime_factor(13195));