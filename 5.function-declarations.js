// function sayHello() {
//     console.log('-----------------');
//     console.log('hello');
//     console.log('-----------------');
// }

// sayHello();


// // Variable Function assignment

// let a = sayHello;
// a();
// a();
// a();


function sayHello(name) {
    console.log('-----------------');
    console.log('hello ' + name);
    console.log('-----------------');

}


sayHello('Elvis')



//Function can return one value
function calculateTax(amount) {
    let tax = amount * 0.089
    return tax

}


console.log(calculateTax(89))