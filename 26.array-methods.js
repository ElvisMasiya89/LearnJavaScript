let names = ['david', 'eddie', 'alex', 'michael'];
let others = ['sammy', 'gray', 'awong', 'mark'];


let lost = [3, 5, 6, 7, 8, 9, 9, 67];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

var combine = lost.concat(fibonacci);
// console.log(combine);

// console.log(fibonacci.join('~'));

// console.log(fibonacci.pop());
// console.log(fibonacci.push(233));
// console.log(fibonacci)

// console.log(lost.shift()); //its like pop at the front of the array
// console.log(lost);


// console.log(lost.unshift(1, 2, 3, 4)); //its like push at the front of the array
// console.log(lost);

// console.log(names);
// console.log(names.reverse());
// console.log(names.sort());


// console.log(others.indexOf('gray'));

// console.log(combine);
// console.log(combine.lastIndexOf(1));


// //map

// //filter
var filtered = combine.filter((x) => {
    if (x <= 15) return x;

})

// console.log(filtered)


// //forEach
// names.forEach((name) => {
//     console.log(`howdy ${name}`);
// })



console.log(filtered.every((num) => num < 10));
console.log(filtered.every((num) => num < 16));


console.log(filtered.some((num) => num < 10));
console.log(filtered.some((num) => num > 16));