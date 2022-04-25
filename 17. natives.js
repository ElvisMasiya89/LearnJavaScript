let pattern = 'xyz';
let value = 'This is  xyz  a test';
console.log(value.replace(pattern, 'just'))


let myString = new String('howdy');

console.log(myString);
console.log(myString.toString());
console.log(typeof myString);

/*
List of all the native Classes
String()
Number()
Boolean()
Object
Function()
Symbol()
*/

/*
This native types dont have primitives like the ones above

Array()
RegExp()
*/


/*This ones just provides extra functionality
Date()
Error()
*/

let myPrimitiveStr = 'This is crazy'
console.log(typeof myPrimitiveStr)
myPrimitiveStr = myPrimitiveStr.toLowerCase() //Function turns primitive to object and return primitive
console.log(typeof myPrimitiveStr)

let myNumber = new Number(7);
console.log(typeof myNumber)
let myPrimitive = myNumber.valueOf(); //Explicitily changing it to primitive
console.log(typeof myPrimitive)