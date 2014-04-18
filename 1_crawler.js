// # Write Python code that assigns to the
// # variable url a string that is the value
// # of the first URL that appears in a link
// # tag in the string page.
// # Your code should print http://udacity.com
// # Make sure that if page were changed to
// # page = '<a href="http://udacity.com">Hello world</a>'
// # that your code still prints the same thing.

// # page = contents of a web page                                                                    #
var page = '<div id="top_bin"> <div id="top_content" class="width960"><div class="udacity float-left"><a href="http://udacity.com">';


var start_link = page.indexOf('<a href=');


var first_quote = page.indexOf('"', start_link);

var last_quote = page.indexOf('"', first_quote + 1);

var url = page.slice(first_quote + 1, last_quote);

console.log(url);


