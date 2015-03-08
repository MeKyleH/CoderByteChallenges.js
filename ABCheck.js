// determines if 'a' and 'b' are separated by 3 character,spaces, and/or symbols
function ABCheck(str) { 
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if(str[i]=== 'a' && str[i+4] === 'b') return true;
        else if(str[i]=== 'b' && str[i+4] === 'a') return true;        
    }
  return false;      
}

var testStr = "bzzza";
console.log(ABCheck(testStr));
