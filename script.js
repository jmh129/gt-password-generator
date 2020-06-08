// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - Password prompts appear when button is clicked.
generateBtn.addEventListener("click", writePassword);

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
    return;
  }
  if (promptLength < 8 || promptLength > 128) {
    alert("Please Enter a Number Between 8 and 128.");
    return;
  } else if (!promptLength) {
    alert("Please Enter a Number Between 8 and 128.");
    return;
  } else {
    confirmLower = confirm(
      "Would you like lowercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    // console.log("Lowercase: " + confirmLower);
    confirmUpper = confirm(
      "Would you like uppercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    // console.log("Uppercase: " + confirmUpper);
    confirmNumber = confirm(
      "Would you like numbers characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    // console.log("Number: " + confirmNumber);
    confirmSpecial = confirm(
      "Would you like special characters characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    // console.log("Special: " + confirmSpecial);
  }

  //   Vars for numbers/letters/special/password
  var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz".split("");
  var alphabetUpper = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("");
  var specials = "!@#$%^&*()_-+={}[]|;:<>,./?".split("");
  var password = [];

  //   If statements for user input - worked with tutor on spread syntax.
  var availOptions = [];
  if (confirmNumber) {
    availOptions = [...availOptions, ...numArr];
  }

  if (confirmLower) {
    availOptions = [...availOptions, ...alphabetLower];
  }

  if (confirmUpper) {
    availOptions = [...availOptions, ...alphabetUpper];
  }

  if (confirmSpecial) {
    availOptions = [...availOptions, ...specials];
  }

  // Random selection loop for variables.
  for (var i = 0; i < promptLength; i++) {
    var randomIndex =
      availOptions[
        Math.floor(Math.random() * availOptions.length) - 1
      ];
    //   Push random index to pwd
    password.push(randomIndex);
    // console.log(randomIndex);
  }

  // Joins password array to string to remove ','
  var pwd = password.join("");
  generatePassword(pwd);
//   console.log("Password: " + pwd);
}

// Display Content in #password
function generatePassword(pwd) {
  document.getElementById("password").value = pwd;
}
