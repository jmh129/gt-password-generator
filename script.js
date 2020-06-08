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
    choices = getRandomSymbol().concat(
      getRandomNumber(),
      getRandomUpper(),
      getRandomLower()
    );
    console.log(choices);
  }
  // Three True and One False 
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
  // Two True Options
  else if (confirmSpecial && confirmNumber) {
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
  // One True Option
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
    console.log(ps)
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

// var password = generatePassword();

var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
