// //expression
// let car = class {
// }

//class declaration
class Car {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


    print() {
        console.log(`${this.make} ${this.model} (${this.year})`)
    }


}


let myCar = new Car('bmw', '745li', 2010);
myCar.print()


class SportCar extends Car {

    revEngine() {
        console.log('Vroom goes the ' + this.model);
    }

}

let mySportCar = new SportCar('benz', 'rfss44', 2019);
mySportCar.print();
mySportCar.revEngine();
//myCar.revEngine()