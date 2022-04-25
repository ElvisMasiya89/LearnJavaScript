let originalCar = {
    make: 'bmw',
    model: '4677f',
    year: 2010
};

//Creating an object based on another object
//This creates a link between the protoype(original) object and  the object

let newCar = Object.create(originalCar);

console.log(newCar);

console.log(newCar.make); //Since newCar does not have property name is simply points to  make in its prototype

newCar.make = 'mazda' // creating propoerty make
console.log(newCar.make); //now it refers to its own property make instead of prototype ,new object properties take precedence
console.log(newCar);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar)
console.log(myPrototype)


originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));


//javascript will keep on traversing obect prototypes to
// find  a value or method definition else return undefined from the Obejct native eg

console.log(newCar.whatever)