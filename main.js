// Button var pull
var button = document.querySelector('.btn');

function printPass() {
    var passTextBox = document.querySelector('.card-content');
    passTextBox.value = createPass();
}

function createPass() {
    var maxlen = 128;
    var minlen = 7;
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specials = "!@#$%^&*()_-+={}[]<>,./?;:'";
    var userValid = true;

    while(userValid === true) {
        var userLen = prompt("Desired length of password.\nChoose between 7 - 128 characters.");
        if(userLen < 7 || userLen > 128) {
            alert('ERROR: Please enter a length between 7 and 128!');
            userValid = false;
        } else {
            var userUppers = confirm("Include upper case letters?");
            var userLowers = confirm("Include lower case letters?");
            var userNumbers = confirm("Include numbers?");
            var userSpecials = confirm("Include special characters?");
        }
    }

    if(userUppers === false && userLowers === false && userNumbers === false && userSpecials === false) {
    alert('ERROR: Please include some form of characters to begin!');
    }

}

// button click to generate to start
button.addEventListener("click", printPass);