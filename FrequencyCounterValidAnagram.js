function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length){
      return false;
  }
  
  const freCounter1 = {};
  const freCounter2 = {};
  
  for(let char of str1){
      freCounter1[char] = (freCounter1[char] || 0) + 1
  }
  for(let char of str2){
      freCounter2[char] = (freCounter2[char] || 0) + 1
  }
  
  for(let key in freCounter1){
      if(!(key in freCounter2)){
          return false;
      }
      if(freCounter1[key] !== freCounter2[key]){
          return false;
      }
  }
  return true;
}
