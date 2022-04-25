//Object Literals

let car = {
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
}

car.printDescription();
console.log(car.year)

//Can also access object properties using array  and dictionery accessor

//Dictionery
console.log(car['year'])

//Array
console.log(car[1])



//You can create object variables on the fly
var anotherCar = {}
anotherCar.another = 'bob'
console.log(anotherCar.another);



//You can create objects within objects

var a = {
    myProperty: { b: 'hi' }
};

console.log(a.myProperty.b);


//Can also store an array of object inside an object aka Object Graph

var c = {
    myProperty: [
        { d: 'this' },
        { e: 'feet' },
        { f: 'get' },
        { g: 'crazy' },
    ]
};