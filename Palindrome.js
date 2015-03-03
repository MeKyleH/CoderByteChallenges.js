function palindrome(str) {
    // removes spaces
    str = str.replace(/\s/g, "");
    
    // checks if the string is a palindrome
    for (var i = 0; i < str.length; i++) {
       if(str[i] !== str[str.length -(1 + i)]) return false;
    }
    return true;
}
