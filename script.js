const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const syms =["\"", "\'", "\`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "<", ">", ",", ".", "/", "?"]

console.log("greetings grader");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//function that generates password
function generatePassword() {
  var charPool = [];
  var passwordLength = prompt("Enter your desired password length (between 8-128 characters");
  if (passwordLength >= 8 && passwordLength <= 128) { //checks for password length
    var hasUpper = confirm("Would you like upper case letters?");
    if (hasUpper) {var charPool = charPool.concat(upperCaseLetters);} //adds uppercase letters to pool of characters
    var hasLower = confirm("Would you like lower case letters?");
    if (hasLower) {var charPool = charPool.concat(lowerCaseLetters);} //adds lowercase letters to pool of characters
    var hasNums = confirm("Would you like numbers?");
    if (hasNums) {var charPool = charPool.concat(nums);} //adds numbers (0-9) to pool of characters
    var hasSyms = confirm("Would you like symbols?");
    if (hasSyms) {var charPool = charPool.concat(syms);} //adds symbols to pool of characters
    if (!hasUpper && !hasLower && !hasNums && !hasSyms) { //this is a check to see if the user has selected at least one character type
      alert("please select at least one value");
      return "you shall not pass(word)" //i think i'm funny
    }
    
    //creates and returns a random password of desired parameters
    let thePassword = "";

    for (var i = 1; i <= passwordLength; i ++) {
      var randomPool = charPool.sort(() => Math.random() - 0.5); //this will randomize the character pool every time it loops
      thePassword = thePassword + randomPool[0];
    }

    return thePassword;

  } else { //occurs if user does not input a valid number
    alert("please enter a number between 8 and 128");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
