for (counter = 0; counter < 20; counter++) {
  if (counter % 3 === 0 && counter % 4 === 0) {
    console.log(counter);
  }
  else {
   (counter % 4 != 0)
    console.log("(" + counter + ")");
  }
}
