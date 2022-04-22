// Assignment code here

// Get Criteria Function
function getCriteria() {
    var userCriteria = {
        length: 8,
        includeLowerCase: true,
        includeUppercase: false,
        includeNumbers: false,
        includeSpecialCharacters: false,
    }

    userCriteria.length = askPasswordLength ();

    //Prompts for character types
    do {
        userCriteria.includeLowerCase = confirm("Do you want to include lowercase characters?");

        userCriteria.includeUppercase = confirm("Do you want to include uppercase characters?");

        userCriteria.includeNumbers = confirm("Do you want to include numbers?");

        userCriteria.includeSpecialCharacters = confirm("Do you want to include special characters?");


    } while (!isCharacterTypeSelected(userCriteria));

    return userCriteria;
    console.log(userCriteria)
}

    // Set length of password to 8-128 characters
function askPasswordLength(){
        var length = prompt("How long do you want the password to be? (Must be between 8 and 128 characters)");
        
        while (!isPasswordLengthValid (length)) {
            length = prompt("Sorry, " + length + " is an invalid length. (Must be a number between 8 and 128)");
        }
        
        return length;
}    
        

function isPasswordLengthValid (length){
            var convertedLength = Number(length);
            var isPasswordLengthValid = (!Number.isNaN(convertedLength)
            && convertedLength % 1===0
            && convertedLength >=8
            && convertedLength <=123);

            return isPasswordLengthValid;
}

// Make sure a character type is selected
function isCharacterTypeSelected(userCriteria) {
    var userCriteriaKeys = Object.values(userCriteria);

    for (var i =1; i< userCriteriaKeys.length; i++) {
        if (userCriteriaKeys[i]) {
            return true;
        }
    }
    alert("You did not select any character types to include in your password. Please select at least one character type.")
}
    
//Generate Password
function generatePassword(userCriteria){
    var allRequestedCharacters = getRequestedCharacters(userCriteria);

    var numberOfCharacterTypes = allRequestedCharacters.length;

    var availableCharacterTypes = getListOfCharacterTypes(numberOfCharacterTypes);

    var password =[];

    for (var i =0; i< userCriteria.length; i++){
        var indexOfCharacterTypes = Math.floor(Math.random()*availableCharacterTypes.length);
        var characterType = availableCharacterTypes[indexOfCharacterTypes];


        var characterNumber = Math.floor(Math.random() *(allRequestedCharacters[characterType].length));

        password.push(allRequestedCharacters[characterType][characterNumber]);
    }

    password = password.toString().replace(/,/g,"");

    return password;
}

function getListOfCharacterTypes(numberOfCharacterTypes){
    var characterTypes = [];
    for (var i =0; i<numberOfCharacterTypes; i++){
        characterTypes.push(i);
    }
    return characterTypes;
}

//get requested characters
function getRequestedCharacters (userSelection){
    var allRequestedCharacters = [];

    if (userSelection.includeLowerCase) {
        allRequestedCharacters.push(getLowerCaseCharacters());
    }

    if (userSelection.includeUppercase){
        allRequestedCharacters.push(getUpperCaseCharacters());
    }

    if (userSelection.includeNumbers){
        allRequestedCharacters.push(getLowerCaseCharacters());
    }

    if (userSelection.includeSpecialCharacters){
        allRequestedCharacters.push(getSpecialCharacters());
    }

    return allRequestedCharacters;
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var criteria = getCriteria();
    var password = generatePassword(criteria);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    console.log(getCriteria)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

