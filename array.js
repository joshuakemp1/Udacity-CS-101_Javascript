function pushing_to_array(array_item_1, array_item_2) {

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push(array_item_1, array_item_2);

  var how_big_is_array = fruits.length;

  return[how_big_is_array,fruits];
}

console.log(pushing_to_array('coke', 'bob'));
