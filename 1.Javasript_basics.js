let name = "Elvis Masiya";
console.log(name);


//Variables
let name1 = "Elvis Masiya1"; //To be used sparingly
var name2 = "Elvis Masiya2"; //Prefered to var
const name3 = "Elvis Masiya3"; // Constant Varible
console.log(name1)



//Data Types
let x = 7;
console.log(typeof(x));
console.log(typeof x);

let y = true;
console.log(typeof(y));

let z = 'Elvis Masiya';
console.log(typeof(z))


let q;
console.log(q);
console.log(typeof(q));


//Type Casting

let n1 = 7;
let n2 = '6';

n3 = parseInt(n2, 10);
console.log('Answer  in Int', typeof n3);

n3 = parseFloat(n2)
console.log('Answer in Float', typeof n3);


let d = parseInt('mary', 10)
let e = isNaN(d)
console.log(d)
console.log(e)