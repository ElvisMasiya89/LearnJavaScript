//DON'T DO THIS
//var my Variable = 'l am the global scope'

//THIS EITHER

/* 
var myFunction = function(){
     console.log('me too')
}

*/

/*
function one() {
    return 'one'
}

function two() {
    return one()
}

value = two()

console.log(value)

*/

function one() {
    console.log('one')
    return 'one';
}

one();

function two() {
    return function() {
        console.log('two');
    }
}

two()()

//OR 

let myFunction = two(); // Function get involked and return the reference to inner function-expression
myFunction();




function three() {
    return function() {
        return 'three'
    }
}




console.log(three()())