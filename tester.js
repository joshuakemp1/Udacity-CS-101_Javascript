var _ = require('lodash');

var last = _.findLast([1, 2, 3, 4], function (num) {
  return num % 2 === 1;
});

console.log(last);
