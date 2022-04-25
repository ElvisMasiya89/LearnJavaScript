// A closure is basically a function that is preloaded with data it this name

function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

//This is the binding process between data and function
let bob = sayHello('bob');
let conrad = sayHello('conrad');
let grant = sayHello('grant');

bob()
conrad()
grant()