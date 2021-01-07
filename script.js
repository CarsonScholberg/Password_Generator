// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GENERATOR FUNCTIONS

// Generating random lowercase letter
function getRandomLower(strLength) {
  var alphabet = "abcdefghiklmnopqrstuvqxyz";
  var returnString = "";
  for (var i = 0; i<strLength; i++){
    var randInt = Math.floor(Math.random() * alphabet.length);
    var randChar = alphabet[randInt];
    returnString=returnString.concat(randChar);
  }
  return returnString;
}

// Generating random uppercase letter
function getRandomUpper(strLength) {
  var alphabet = "abcdefghiklmnopqrstuvqxyz";
  var returnString = "";
  for (var i = 0; i<strLength; i++){
    returnString=returnString.concat(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase());
  }
  return returnString;
}

// Generating random symbol
function getRandomSymbol(strLength) {
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var returnString = "";
  for (var i = 0; i<strLength; i++){
    returnString=returnString.concat(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return returnString;
}

// Generating random number
function getRandomNumber(strLength) {
  var returnString = "";
  for (var i = 0; i<strLength; i++){
    returnString=returnString.concat(Math.floor(Math.random() * 9).toString());
  }
  return returnString;
}

// Randomize array in-place using Durstenfeld shuffle algorithm //
function shuffleString(strVar) {
  var array = strVar.split("");
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array.join("");
}

// Linking inputs from HTML file
function generatePassword() {
  var passwordLength = document.querySelector("#charAmountRange").value;
  var lowercase = document.querySelector("#lowercaseSelect").checked;
  var uppercase = document.querySelector("#uppercaseSelect").checked;
  var symbols = document.querySelector("#symbols").checked;
  var numbers = document.querySelector("#numbers").checked;
  var password = "";

  // Determining which inputs are selected by the user
  if (passwordLength<8 || passwordLength>128){
    alert("Please enter a number between 8 and 128");
  }
  else if (lowercase || uppercase || symbols || numbers){
    var types = 0;
    if(lowercase){
      types++;
    }
    if(uppercase){
      types++
    }
    if(symbols){
      types++
    }
    if(numbers){
      types++
    }

    var numberPerType = Math.ceil(passwordLength/types);

    // Adding the randomly generated password parts to the final result
    if(lowercase){
      password=password.concat(getRandomLower(numberPerType));
    }
    if(uppercase){
      password=password.concat(getRandomUpper(numberPerType));
    }
    if(symbols){
      password=password.concat(getRandomSymbol(numberPerType));
    }
    if(numbers){
      password=password.concat(getRandomNumber(numberPerType));
    }
  }
  else{
    alert("Please select at least one character type");
  }
  // shuffling to mix up the groups of inputs
  return shuffleString(password);
}


