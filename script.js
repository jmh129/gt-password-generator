// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // User Input
  var promptLength = prompt(
    "Please enter you desired password length. Your password must be a minimum of '8' and a maximmum of '128' characters long."
  );
  var confirmLower = confirm(
    "Would you like lowercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  var confirmUpper = confirm(
    "Would you like uppercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  var confirmNumber = confirm(
    "Would you like numbers characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  var confirmSpecial = confirm(
    "Would you like special characters characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
