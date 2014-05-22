for (numbers = 1; numbers <= 100; numbers++) {
  if (numbers % 15 === 0) {
    console.log('FizzBuzz');
  } else if (numbers % 5 === 0) {
    console.log('Buzz');
  } else if (numbers % 3 === 0) {
    console.log('Fizz');
  }
  else {
    console.log(numbers);
  }
}