// Assignment Code
var generateBtn = document.querySelector("#generate");

const characterAmountNumber = promptLength
const includeLowercaseElement = confirmLower
const includeUppercaseElement = confirmUpper
const includeNumbersElement = confirmNumber
const includeSymbolsElement = confirmSpecial
const passwordDisplay = document.getElementById('passwordDisplay')

const Uppercase_Char_Codes = arrayFromLowToHigh(65, 90);
const Lowercase_Char_Codes = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

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
  if (promptLength < 8 || promptLength > 128) {
    alert("Please Enter a Number Between 8 and 128.");
  }
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
