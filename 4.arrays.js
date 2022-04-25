let a = [3, 5, 6, 7, 8, 9, 9, 67];
let b = ['david', 'eddie', 'alex', 'michael'];

console.log(a[0]);
console.log(a);


let c = [4, 'alex', true]; // Array is of type object csn store types of data
console.log(c);

console.log(a.length); //The actual number ,NOT Zero  based

// Create A sparse array
sparse = a
sparse[10] = 10
console.log(sparse)


//Adding elements to the end of array
a.push(77)
console.log(a.length)


//Subtracting elements from the end of array
a.pop()
console.log(a.length)