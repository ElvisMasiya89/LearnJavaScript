let a, b, c, d, e

let names = ['david', 'eddie', 'alex', 'michael', 'elvis'];

[a, b, c, e, d] = names

console.log(a, b, c, e, d)


// Can also unpack to both array and variable at the same time syntax below

let others

    [a, b, ...others] = names


console.log(a, b, others)


//Destructuring or Unpacking Objects

let year, model;
({ year, model } = {

    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000,

});

console.log(year)
console.log(model)