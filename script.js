// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // User Input Prompts
  var promptLength = prompt(
    "Please enter you desired password length. Your password must be a minimum of '8' and a maximmum of '128' characters long."
  );
  // Converting user input to Integer.
  promptLength = parseInt(promptLength);

  while (isNaN(promptLength)) {
    alert("Please enter a number.");
    break;
  }
  if (promptLength < 7 || promptLength > 127) {
    alert("Please Enter a Number Between 8 and 128.");
  }
  console.log(promptLength);
  var confirmLower = confirm(
    "Would you like lowercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  console.log(confirmLower);
  var confirmUpper = confirm(
    "Would you like uppercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  console.log(confirmUpper);
  var confirmNumber = confirm(
    "Would you like numbers characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  console.log(confirmNumber);
  var confirmSpecial = confirm(
    "Would you like special characters characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  );
  console.log(confirmSpecial);

  const userInput = {
    length: promptLength,
    lower: confirmLower,
    upper: confirmUpper,
    number: confirmNumber,
    special: confirmSpecial,
  };

  console.log(userInput);

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
