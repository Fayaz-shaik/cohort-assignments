/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toUpperCase();
  str2=str2.toUpperCase()
  if(str1.length!=str2.length){
    return false;
  }
  let s1 = [];
  let s2 = [];
  for(let i=0;i<26;i++){
    s1[i]=0;
    s2[i]=0;
  }
  for(let i = 0;i<str1.length;i++){
      s1[str1.charCodeAt(i)-65]++;
  }
  for(let i = 0;i<str2.length;i++){
      s2[str2.charCodeAt(i)-65]++;
  }
  console.log(s1);
  console.log("wait");
  console.log(s2);
  for(let i = 0;i<s1.length;i++){
    if(s1[i]!=s2[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
