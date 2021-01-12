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
  prompt("choose length of password 8-128");{
    if(pwdLength < 8 || pwdLength > 128){
    alert("please choose a number between 8-128");}
    return;
  }
  if(uppercase{
    allChar.concat(upperCase);
  })
      console.log(pwdLength);
    }
    
  }
  


function generatePassword(){
  return "temporary password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
