// var marker = "AFK";
// var replacement = "away from keyboard";
// var line = "I will now go to sleep and be AFK until lunch time tomorrow.";
// var replaced = "I will now go to sleep and be away from keyboard until lunch time tomorrow";

 // Example 2 # uncomment this to test with different input
var marker = "EY";
var replacement = "Eyjafjallajokull";
var line = "The eruption of the volcano EY in 2010 disrupted air travel in Europe for 6 days.";


var replaced = line.replace(marker, replacement);

console.log(replaced);
