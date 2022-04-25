let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

//Example Regex Functions
let value = 'This is xyz a test.';
console.log(pattern.test(value));

//replaces pattern with value
console.log(value.replace(pattern, 'just'));

//return match information
console.log(value.match(pattern));

var match = value.match(pattern);
console.log(match.index)