var page = ('this is a <a href="http://udacity.com">link!</a>');

function get_next_target(input) {
  var start_link = input.indexOf('<a href=');

  var start_quote = input.indexOf('"', start_link + 1);

  var end_quote = input.indexOf('"', start_quote + 1);

  var url = input.slice(start_quote + 1, end_quote);

  var has_a_link = (/http/);

  if (url.match(has_a_link)) {
    return url;
  }
  else {
      return ('None');
    }
}
console.log(get_next_target(page));
