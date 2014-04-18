// # Write Python code that initializes the variable
// # start_link to be the value of the position
// # where the first '<a href=' occurs in a page.

var page = '<div id="top_bin"> <div id="top_content" class="width960"><div class="udacity float-left"> <a href="/">';

var start_link = page.indexOf('<a href=');

console.log(start_link);
