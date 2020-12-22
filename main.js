// Button var pull
var button = document.querySelector('.btn');

// prints password onto textbox
function printPass() {
    var passTextBox = document.querySelector('.card-content');
    passTextBox.value = createPass();
}

// prompts user and creates password according to users preference
function createPass() {
    var maxlen = 128;
    var minlen = 8;
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specials = "!@#$%^&*()_-+={}[]<>,./?;:'";
    var userValid = true;
    var userChoice = '';
    var password = '';

    // Using while loop to keep running until error or returns results
    while(userValid === true) {
        var userLen = prompt("Desired length of password.\nChoose between " + minlen + " - " + maxlen + " characters.");
        if(isNaN(userLen) || userLen < minlen || userLen > maxlen) {
            alert("ERROR: Please enter a length between "  + minlen + " and " + maxlen + "!");
            // the return in place to prevent undefined from showing
            return "ERROR: Please enter a length between "  + minlen + " and " + maxlen + "!";
        } else {

            var userUppers = confirm("Include uppercase letters?");
            var userLowers = confirm("Include lowercase letters?");
            var userNumbers = confirm("Include numbers?");
            var userSpecials = confirm("Include special characters?");

            // If user doesn't choose any characters, throws this error up
            if(!userUppers && !userLowers && !userNumbers && !userSpecials) {
                alert("ERROR: You must include one form of characters to begin!");
                // Return in place to prevent undefined from showing
                return "ERROR: You must include one form of characters to begin!";
                }

            } // Puts all of user's preference into a variable
            if(userUppers) {
                userChoice += uppers;
            }
            if(userLowers) {
                userChoice += lowers;
            }
            if(userNumbers) {
                userChoice += numbers;
            }
            if(userSpecials) {
                userChoice += specials;
            }
            // Loops through UserChoice based on user's preference and randomly selects for password to show
            for(var i = 0; i < parseInt(userLen); i++) {
                password += userChoice[Math.floor(Math.random() * userChoice.length)];
            }
        }
    }

// button click to generate to start
button.addEventListener("click", printPass);