// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating generate password function
function generatePassword(){
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];


// Created a variable number of characters for the promt message and then wrote if condition and then particular msg will prompted
  var numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");

  }

  // I have created the variable with confirm method for the lower case if they selected lowercase and then they will get a prompt that your password will have lowecase else not
  var hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  // I have created the variable with confirm method for the upper case if they selected uppercase and then they will get a prompt that your password will have uppercase else not

  var hasUppercase = confirm("Do you want uppercase characters?");
if (hasUppercase) {
  alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}

// I have created the variable with confirm method for the number if they selected yes they want number and then they will get a prompt that your password will have numbers else not

var hasNumbers = confirm("Do you want to use numbers?");
if (hasNumbers) {
  alert("Your password will have numbers.");
}
else {
  alert("Your password will NOT have numbers.");
}

// I have created the variable with confirm method for the special Characters if they selected yes they want special characters and then they will get a prompt that your password will have special characters else not

var hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  // I created a If condition that states that if the user says no to lowercase,uppercase,numbers & special characted to be in his/her password then it willr eturn please select atleast one type 
  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

// I created if statement thats helping in concat with possibleCharacters
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
