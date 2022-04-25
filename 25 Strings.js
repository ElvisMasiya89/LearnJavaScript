let first = 'composers, particularly music of earlier periods. The pieces have various musical forms and were composed';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,16,23,42';

//You can even call methods on string literals
console.log('bob loves you'.toUpperCase());


let splitStr = third.split(',');
console.log(splitStr)

let sliceStr = first.slice(11, 23);
console.log(sliceStr);

let mysubStr = first.substr(11, 12);
console.log(mysubStr);

let myEndWith = second.endsWith('try.');
console.log(myEndWith);

let myStartWith = second.startsWith('Do');
console.log(myStartWith);

let myInclude = second.includes('There'); //Is is Case sensitive
console.log(myInclude);

let myRepeat = 'Ha!'.repeat(3);
console.log(myRepeat);


let myTrim = '    bloated    '
console.log(myTrim.length)
console.log(myTrim.trim().length)
console.log(myTrim.trim())