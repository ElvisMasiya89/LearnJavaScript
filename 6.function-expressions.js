/* These are functions that dont have identifiers and are used only 
once and can be passed  to Other functions as arguments */

// function(){
//     console.log('Apo Madii')
// }


setTimeout(
    function() {
        console.log('Apo Madii');
    }, 2000);


function cat() {
    console.log('cat')
};

cat();
//Invoking a function soon after declaration   

(function() {
    console.log('Immediately Invoked Function Expression (IIFE)')
})();