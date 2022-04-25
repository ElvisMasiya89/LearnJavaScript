let h1 = () => { console.log('howdy'); }
h1();

let h2 = (name) => { console.log(`howdy ${name}`) };
h2('Elvis')


let add = (a, b) => {
    return a + b;
}

console.log(add(7, 3))



//Arrow are useful when need to run a function over each element of an array

let names = ['david', 'eddie', 'alex', 'michael'];
names.map((name) => {

    console.log(`howdy ${name}`)

})


var transformed = names.map((name) => {
    return `howdy ${name}`
})

console.log(transformed)