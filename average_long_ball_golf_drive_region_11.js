var list_of_drives = [393, 386, 361, 334, 295, 325, 364, 430, 408, 434, 423, 417, 301, 320, 304, 324, 350, 342, 330, 346, 323, 350, 365, 369, 315, 336, 333, 341, 310, 347, 344, 351, 298, 347];

function averages(input) {
  var counter_1 = 0;
  var total = 0;

  while (counter_1 < input.length) {
    total = total + input[counter_1];
    counter_1++;
  }
  var result = total / input.length;
  return result;
}


console.log(averages(list_of_drives));


