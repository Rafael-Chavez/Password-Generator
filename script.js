// Assignment Code
var generateBtn = document.querySelector("#generate");



  // var upperCase = ["A,B,C,D,E,F,G,H,J,I,L,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  // var numeric = [];
  // var specialCharacters = [!@#$%^&*()]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
    var upperCase = confirm("include upper case letters?");
    var lowerCase = confirm("include lower case letters?");
    var numberCase = confirm("include numbers?");
    var symbolCase = confirm("include symbols?");
    
  

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
