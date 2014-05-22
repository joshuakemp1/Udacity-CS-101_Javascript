var answer;
while (true) {
answer = prompt('What is 2 + 2?', '');
if (answer === '4') {
  alert("That's CORRECT!!!");
  break;
  }
  else if (answer === '3' || answer === '5') {
    alert('Almost!');
  }
  else {
    alert("You're an embarrassment!");
  }
}
