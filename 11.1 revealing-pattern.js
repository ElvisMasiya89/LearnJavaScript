//Revealing pattern to prevent global variable errors 


var counter = (function() {

    //private stuff
    let count = 0;

    function print(message) {
        console.log(message + '----' + count);
    }


    function getCount() { return count; }




    function setCount(value) { count = value; }

    function incrementCount() {
        count += 1;
        print('After increment: ');
    }


    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    return {
        //it can easily be broken by reset the propertiesin the return statements to 
        //to something else
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    };


})();

console.log(counter.count); // count can be assessed because its private to the module
console.log(counter.value);

counter.increment()
counter.increment()
counter.increment()

//Accidentally created a closure
console.log(counter.value);

counter.set(7)
console.log(counter.get())
counter.reset()