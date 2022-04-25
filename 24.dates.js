let today = new Date();

let bob = new Date('December 7, 1969 07:01:23')
    // let bob1 = new Date('1969-12-07T07:01:23'); //T for Time
    // let bob2 = new Date(1969, 11, 6);
    // let bob3 = new Date(1969, 11, 6, 7, 1, 23);

var elapsedTime = today - bob;
console.log("time", elapsedTime); //milliseconds


console.log(bob.getDate()); //Monday = 1, Sunday = 7
console.log(bob.getTime())
console.log('MONTH', bob.getMonth())
console.log(bob.getDay())
console.log(bob.getHours())
console.log(bob.getMinutes())
console.log(bob.getMilliseconds())