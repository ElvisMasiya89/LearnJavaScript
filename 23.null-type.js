let a;
console.log(a);
console.log(typeof a);

let pattern = /xyz/;
let value = 'This is just a test.';
var match = value.match(pattern);
console.log(match)

//Type of null==obeject is a known bug  that has been 
//grandfathered into in JavaScript that will
// never be fixed because too much code depends on that being true

console.log(typeof match)

if (match === null) {
    console.log('no match was found')
}