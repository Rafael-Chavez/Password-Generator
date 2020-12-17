// Assignment Code
var generateBtn = document.querySelector("#generate");



  var upperCase = ["A,B,C,D,E,F,G,H,J,I,L,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  var numeric = [0,1,2,3,4,5,6,7,8,9];
  var specialCharacters = ["!,@,#,$,%,^,&,*"];
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
    
    var pwdLength = prompt("How many characters would you like to have between 8-128?");
    if (pwdLength < 8 || pwdLength > 128){
      alert("pick a length for your password between 8-128.");
      return;
    }
    if (upperCase){
      allChar.concat(upperCase);
    }
    if (lowerCase){
      allChar.concat(lowerCase);
    }
    if (numberCase){
      all.char.concat(numberCase);
    }
    if (symbolCase){
      all.char.concat(symbolCase);
    }
    if (!upperC && !lowerC && !number && !symbol){
      alert("You need one of these choices.");
      return;
    }

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
