// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Array
var password = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get Random ASCII characters.
// https://www.w3schools.com/charsets/ref_html_ascii.asp - Link to Table
// Lowercase #'s start at 97 - Uppercase - 65 - Numbers - 48.
// function randomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function randomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function randomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function randomSpecial() {
//   const specials = "!@#$%^&*()_-+={}[]|;:<>,./?";
//   return specials[Math.floor(Math.random() * specials.length)];
// }





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

  var numArr = [0,1,2,3,4,5,6,7,8,9]
  var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var alphabetUpper ='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  var specials = '!@#$%^&*()_-+={}[]|;:<>,./?'.split('');
  
//   Predefined Array - and Special Characters. 
  
  var availOptions = []
  if(confirmNumber){
      availOptions = [...availOptions,...numArr]
      console.log(availOptions)
  }
  
  if(confirmLower){
      availOptions = [...availOptions,...alphabetLower]
  }
  
  if(confirmUpper){
      availOptions = [...availOptions, ...alphabetUpper]
  }

  if(confirmSpecial){
    availOptions = [...availOptions, ...specials]
}
console.log(availOptions);

  //   Selection Options
  // Four False Options.
//   if (
//     !confirmLower &&
//     !confirmUpper &&
//     !confirmNumber &&
//     !confirmSpecial
//   ) {
//     choices = alert("You must make at least one selection.");
//   }
//   //  Four True Options
//   else if (
//     confirmLower &&
//     confirmUpper &&
//     confirmNumber &&
//     confirmSpecial
//   ) {
//     inputs = randomLower().concat(
//       randomUpper(),
//       randomNumber(),
//       randomSpecial()
//     );
//   }
//   // Three True and One False
//   else if (confirmLower && confirmUpper && confirmNumber) {
//     inputs = randomLower().concat(randomUpper(), randomNumber());
//   } else if (confirmLower && confirmUpper && confirmNumber) {
//     inputs = randomLower().concat(randomUpper(), randomNumber());
//   } else if (confirmSpecial && confirmLower && confirmUpper) {
//     inputs = randomSpecial().concat(randomLower(), randomUpper());
//   } else if (confirmNumber && confirmLower && confirmUpper) {
//     inputs = randomNumber().concat(randomLower(), randomUpper());
//   }
//   // Two True Options
//   else if (confirmSpecial && confirmNumber) {
//     inputs = randomSpecial().concat(randomNumber());
//   } else if (confirmSpecial && confirmLower) {
//     inputs = randomSpecial().concat(randomLower());
//   } else if (confirmSpecial && confirmUpper) {
//     inputs = randomSpecial().concat(randomUpper());
//   } else if (confirmLower && confirmNumber) {
//     inputs = randomLower().concat(randomNumber());
//   } else if (confirmLower && confirmUpper) {
//     inputs = randomLower().concat(randomUpper());
//   } else if (confirmNumber && confirmUpper) {
//     inputs = randomNumber().concat(randomUpper());
//   }
//   // One True Option
//   else if (confirmSpecial) {
//     inputs = randomSpecial();
//   } else if (confirmNumber) {
//     inputs = randomNumber();
//   } else if (confirmLower) {
//     inputs = randomLower();
//   } else if (confirmUpper) {
//     inputs = randomUpper();
//   }

  // Random selection for variables.
  for (var i = 0; i < promptLength; i++) {
      var randomIndex = availOptions[Math.floor(Math.random() * availOptions.length) - 1];
    // var userInputs =
    //   inputs[Math.floor(Math.random() * inputs.length)];
    password.push(randomIndex);
    console.log(randomIndex);
  }

  // Joins password array
  var pwd = password.join("");
  UserInput(pwd);
  console.log("Password: " + pwd);
}

// Display Content in #password
function UserInput(pwd) {
  document.getElementById("password").value = pwd;
}

// This came with the assignment.
// var password = generatePassword()

// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
