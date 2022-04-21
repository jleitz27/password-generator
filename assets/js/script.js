// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var criteria= getCriteria();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    console.log(getCriteria)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Code to run 
function getCriteria() {
    var userCriteria = {
        length: 8,
        includelowerCase: true,
        includeupperCase: false,
        includenumbers: false,
        includespecialCharacters: false,
    }

    userCriteria.length = askPasswordLength ();
    console.log(userCriteria.length)

    function askPasswordLength(){
        var length = prompt("How long do you want the password to be? (Must be between 8 and 128 characters)")
        
        while (!isPasswordLengthValid (length)) {
            length = prompt("Sorry, ${length} is an invalid length. (Must be between 8 and 128 characters)")
        }
            
        

        function isPasswordLengthValid (length){
            var convertedLength = Number(length);
            var isPasswordLengthValid = (!Number.isNaN(convertedLength)
            && convertedLength % 1===0
            && convertedLength >=8
            && convertedLength <=123);

            return isPasswordLengthValid;
        }
    }
}

// functinons for characters

function getLowerCaseCharacters(){
    var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return lowerCase
}

function getUpperCaseCharacters (){
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return upperCase
}

function getNumberList (){
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return numbers
}

function getSpecialCharacters(){
    var specialCharacters =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",'"'];
    return specialCharacters 
}