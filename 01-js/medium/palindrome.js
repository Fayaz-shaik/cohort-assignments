/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length<=1){
    return true;
  }
  str = str.toUpperCase().trim().replace(/[^a-zA-Z0-9]/g, "");;
  let i = 0;
  while(i<str.length/2){
    if(str[i]!=str[str.length-i-1]){
      return false;
    }
    i++;
  }
  return true;
}

module.exports = isPalindrome;
