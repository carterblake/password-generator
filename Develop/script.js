const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const syms =['"', "'", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "<", ">", ",", ".", "/", "?"]

//var charPool = [].concat(upperCaseLetters, lowerCaseLetters); this is how i will combine arrays and create the character pool to randomize

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charPool = [];
  var passwordLength = prompt("how long");
  var hasUpper = confirm("want uppr?");
  if (hasUpper) {var charPool = charPool.concat(upperCaseLetters);}
  var hasLower = confirm("want lower?");
  if (hasLower) {var charPool = charPool.concat(lowerCaseLetters);}
  var hasNums = confirm("want numbies?");
  if (hasNums) {var charPool = charPool.concat(nums);}
  var hasSyms = confirm("want symblos?");
  if (hasSyms) {var charPool = charPool.concat(syms);}
  console.log(charPool);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
