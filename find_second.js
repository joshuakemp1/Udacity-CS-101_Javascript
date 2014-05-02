var search_s = 'hkjfhddkfhdkfhfl';


//indexOf search_s = 3,
function find_second(s1, s2) {
  var first_f = s1.indexOf(s2);
  var second_f = s1.indexOf(s2, first_f +1);
  return second_f;
    // console.log(search_s);

}

console.log(find_second(search_s, 'f'));
