car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
};


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

/* Calling a any function with the new keyword 
creates an constructor call  and a empty object 
as is passed as the `this` to that function that 
assign that function's data to the object*/

let myCar = new Car('bmw', '2242dv', 2010);
console.log(myCar);

//When a function is called using the 'new' 
//keyword its no longer a function its an object
//The Convention is declare the function with UpperCase first letter
console.log(typeof myCar)