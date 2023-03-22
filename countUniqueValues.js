function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 1;
  
  while(right < arr.length){
    if(arr[left] != arr[right]){
      left++;
      arr[left] = arr[right];
    }

    right++;
  }

  return left + 1;
}
