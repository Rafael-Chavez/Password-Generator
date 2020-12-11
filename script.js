// Assignment Code
var generateBtn = document.querySelector("#generate");



  
  // var upperCase = ["ABCDEFGHJILKLMNOPQRSTUVWXYZ"];
  // var numeric = [];
  // var specialCharacters = [!@#$%^&*()]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
}
var lengthOfPassword = prompt("Choose between 8-128 characters for your password.");


function generatePassword(){

  return "temporary password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
