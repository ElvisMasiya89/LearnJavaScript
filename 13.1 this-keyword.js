/*
When it comes to calling the method of an object the call site for 'this'
key-word  is the object it self and all of its properties are available to this
*/

/* let car = {
    make: 'bmw',
    model: '434534d',
    year: 2010,

    getPrice: function() {
        //perform some calc
        return 5000;

    },

    


    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
} */


function first() {
    return this;
}

/* This is Node's global object
because that's where the
first method was called */

console.log(first() === global)



function second() {

    'use strict';

    return this;
}

console.log(second() === global)
console.log(second() === undefined)



let myObject = { value: 'My Object' };
//value is set on the global object
global.value = 'Global object';



function third() {
    /* 
    Returns something different depending on 
     how we call this method
    */

    return this.value;
}

console.log(third())


/*

"this" key-word depends on HOW a function is called. 
An object can be passed as the first argument to call or apply
and "this" will be bound to it.

*/



//Another way of calling functions
/*
Both call and apply allow you to explicitly set
what you want to represent 'this'.The difference is in how
additional argument to the function are sent.
*/
console.log(third.call(myObject));
console.log(third.apply(myObject));


function third(name) {
    return this.value + " " + name;
}

//Another  way of calling functions
console.log(third.call(myObject, 'elvis')); // call passes extra arguments one by one
console.log(third.apply(myObject, ['elvis'])); // apply passes extra arguments  as an array




/*
When it comes to calling the method of an object the call site for 'this'
key-word  is the object it self and all of its properties are available to this
*/

//Demonstration
function fifth() {
    console.log(this.firstname + ' ' + this.lastname);
}

let customer1 = {
    firstname: 'Bob',
    lastname: 'tabor',
    print: fifth

}

let customer2 = {
    firstname: 'richard',
    lastname: 'boughton',
    print: fifth

}

customer2.print()
customer1.print()