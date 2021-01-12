// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var num = [0,1,2,3,4,5,6,7,8,9];
var passwordLength = "";
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
   passwordText.value = password;
}  
  var passwordLength = prompt("Please type how long you want your password to be from 8-128.");
  if (passwordLength < 8 || passwordLength > 128){
    alert("Please choose a number between 8 and 128");
  }
  else {
    console.log("good job!");
  }
var lowerCase = confirm("Do you want your password to contain lower case letters?");
if (lowerCase){
  console.log(lowerCase);
}










function generatePassword(){
  return "temporary password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
