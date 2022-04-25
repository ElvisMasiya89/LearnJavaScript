count = 4;

if (count === 3) {
    console.log('Hi');

} else if (count === 4) {
    console.log('hello')

} else {
    console.log('world')
};


// Switch Statement
switch (count) {
    case 3:
        console.log('Hi from switch');
        break;
    case 4:
        console.log('Hello from switch');
        break;
    default:
        console.log('World from switch');

}

/*Tenary Operator*/

str_count = '4';
//Checking for equality after coercion (type casting an operand to another operand's type)
let result = (count == str_count) ? 'equal' : ' not equal';
console.log(result);

//Strict Checking for equality without coercion using === operator
console.log((count === str_count) ? 'equal' : ' not equal')