// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get Random ASCII characters.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()_-+={}[]|;:<>,./?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

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
    console.log("Lowercase: " + confirmLower);
    confirmUpper = confirm(
      "Would you like uppercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    console.log("Uppercase: " + confirmUpper);
    confirmNumber = confirm(
      "Would you like numbers characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    console.log("Number: " + confirmNumber);
    confirmSpecial = confirm(
      "Would you like special characters characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
    );
    console.log("Special: " + confirmSpecial);
  }

  // Four False Options.
  if (
    !confirmLower &&
    !confirmUpper &&
    !confirmNumber &&
    !confirmSpecial
  ) {
    choices = alert("You must make at least one selection.");
  }
  //  Four True Options
  else if (
    confirmLower &&
    confirmUpper &&
    confirmNumber &&
    confirmSpecial
  ) {
    inputs = getRandomLower().concat(
      getRandomUpper(),
      getRandomNumber(),
      getRandomSymbol()
    );
    // console.log(inputs);
  }
  // Three True and One False
  else if (confirmLower && confirmUpper && confirmNumber) {
    inputs = getRandomLower().concat(
      getRandomUpper(),
      getRandomNumber()
    );
  } else if (confirmLower && confirmUpper && confirmNumber) {
    inputs = getRandomLower().concat(
      getRandomUpper(),
      getRandomNumber()
    );
  } else if (confirmSpecial && confirmLower && confirmUpper) {
    inputs = getRandomSymbol().concat(
      getRandomLower(),
      getRandomUpper()
    );
  } else if (confirmNumber && confirmLower && confirmUpper) {
    inputs = getRandomNumber().concat(
      getRandomLower(),
      getRandomUpper()
    );
  }
  // Two True Options
  else if (confirmSpecial && confirmNumber) {
    inputs = getRandomSymbol().concat(getRandomNumber());
  } else if (confirmSpecial && confirmLower) {
    inputs = getRandomSymbol().concat(getRandomLower());
  } else if (confirmSpecial && confirmUpper) {
    inputs = getRandomSymbol().concat(getRandomUpper());
  } else if (confirmLower && confirmNumber) {
    inputs = getRandomLower().concat(getRandomNumber());
  } else if (confirmLower && confirmUpper) {
    inputs = getRandomLower().concat(getRandomUpper());
  } else if (confirmNumber && confirmUpper) {
    inputs = getRandomNumber().concat(getRandomUpper());
  }
  // One True Option
  else if (confirmSpecial) {
    inputs = getRandomSymbol();
  } else if (confirmNumber) {
    inputs = getRandomNumber();
  } else if (confirmLower) {
    inputs = getRandomLower();
  } else if (confirmUpper) {
    inputs = getRandomUpper();
  }

  // Empty Password Variable
  var password = [];

  function UserInput(pwd) {
    document.getElementById("password").textContent = pwd;
  }

  // Random selection for variables.
  for (var i = 0; i < promptLength; i++) {
    var userInputs =
      inputs[Math.floor(Math.random() * inputs.length)];
    password.push(userInputs);
    // console.log(userInputs);
  }
  // Joins password array
  var pwd = password.join("");
  UserInput(pwd);
  console.log("Password: " + pwd);
}

// This came with the assignment. 
// var password = generatePassword()

// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
