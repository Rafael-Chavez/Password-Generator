// Assignment Code
var generateBtn = document.querySelector("#generate");


  var allChar = {
   upperCaseValue = ["A,B,C,D,E,F,G,H,J,I,L,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"],
   lowerCaseValue = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"],
   numeric = [0,1,2,3,4,5,6,7,8,9],
   specialCharacters = ["!,@,#,$,%,^,&,*"],
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
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
      allChar.concat(upperCaseValue);
    }
    if (lowerCase){
      allChar.concat(lowerCaseValue);
    }
    if (numberCase){
      all.char.concat(numeric);
    }
    if (symbolCase){
      all.char.concat(specialCharacters);
    }
    if (!upperC && !lowerC && !number && !symbol){
      alert("You need one of these choices.");
      return;
    }

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
