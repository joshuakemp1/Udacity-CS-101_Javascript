// # Write Python code that initializes the variable
// # start_link to be the value of the position
// # where the first '<a href=' occurs in a page.

var page = '<div id="top_bin"> <div id="top_content" class="width960"><div class="udacity float-left"> <a href="/">';

console.log(page.indexOf('<a href='));

// var start_link = page.substring(91);

var start_link = page.indexOf('<a href=');

console.log(start_link());

console.log(91);



// page = '''<div id="top_bin"> <div id="top_content" class="width960">
//    <div class="udacity float-left"> <a href="/">'''

// print page.find('<a href=')

// start_link = page[95:]

// print start_link

// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("welcome");
