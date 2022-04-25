(function() {
    function clickHandler(message) {
        console.log('l will ' + '...' + message);
    }
    //Get a reference to my Button
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', () => clickHandler('Hi from my iffy'))


})();