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
  //   console.log(promptLength);
  //   var confirmLower = confirm(
  //     "Would you like lowercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  //   );
  //   console.log(confirmLower);
  //   var confirmUpper = confirm(
  //     "Would you like uppercase characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  //   );
  //   console.log(confirmUpper);
  //   var confirmNumber = confirm(
  //     "Would you like numbers characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  //   );
  //   console.log(confirmNumber);
  //   var confirmSpecial = confirm(
  //     "Would you like special characters characters in your password? Click 'Ok' for Yes or 'Cancel' for No."
  //   );
  //   console.log(confirmSpecial);

  // Else if for 4 negative options
  if (
    !confirmLower &&
    !confirmUpper &&
    !confirmNumber &&
    !confirmSpecial
  ) {
    choices = alert("You must choose a criteria!");
  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (
    confirmLower &&
    confirmUpper &&
    confirmNumber &&
    confirmSpecial
  ) {
    choices = getRandomSymbol().concat(
      getRandomNumber(),
      getRandomUpper(),
      getRandomLower()
    );
    console.log(choices);
  }
  // Else if for 3 positive options
  else if (confirmLower && confirmUpper && confirmNumber) {
    choices = getRandomSymbol().concat(
      getRandomLower,
      getRandomUpper(),
      getRandomNumber()
    );
  } else if (confirmLower && confirmUpper && confirmNumber) {
    choices = getRandomSymbol().concat(
      getRandomLower(),
      getRandomUpper(),
      getRandomNumber()
    );
  } else if (confirmSpecial && confirmLower && confirmUpper) {
    choices = getRandomSymbol().concat(
      getRandomLower(),
      getRandomUpper()
    );
  } else if (confirmNumber && confirmLower && confirmUpper) {
    choices = getRandomNumber().concat(
      getRandomLower(),
      getRandomUpper()
    );
  }
  //   // Else if for 2 positive options
  else if (confirmSymbol && confirmNumber) {
    choices = getRandomSymbol().concat(getRandomNumber());
  } else if (confirmSpecial && confirmLower) {
    choices = getRandomSymbol().concat(getRandomLower());
  } else if (confirmSpecial && confirmUpper) {
    choices = getRandomSymbol().concat(getRandomUpper());
  } else if (confirmLower && confirmNumber) {
    choices = getRandomLower().concat(getRandomNumber());
  } else if (confirmLower && confirmUpper) {
    choices = getRandomLower().concat(getRandomUpper());
  } else if (confirmNumber && confirmUpper) {
    choices = getRandomNumber().concat(getRandomUpper());
  }
  //   // Else if for 1 positive option
  else if (confirmSpecial) {
    choices = getRandomSymbol();
  } else if (confirmNumber) {
    choices = getRandomNumber();
  } else if (confirmLower) {
    choices = getRandomLower();
  }
    else if (confirmUpper) {
      choices = getRandomUpper();
}

// password variable is an array placeholder for user generated amount of length
var password = [];

// Start random selection variables:
// Random selection for all variables:
  for (var i = 0; i < promptLength; i++) {
    var pickChoices =
      choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
    console.log(pickChoices)
  }
  // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

//   const userInput = {
//     length: promptLength,
//     lower: confirmLower,
//     upper: confirmUpper,
//     number: confirmNumber,
//     special: confirmSpecial,
//   };
// I have this but what to do with it now?
// Need to connect characters to confirm()
//   console.log(userInput);

//   var password = [];

//   for (var i = 0; i < promptLength; i++) {
//     var pickChoices = userInput[Math.floor(Math.random() * promptLength.length)];
//     password.push(pickChoices);
//     console.log(userInput);
//   }

//   console.log(password);

//   var password = generatePassword();

var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
