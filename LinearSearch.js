function findIndex(arr,target){
for(let i=0;i<arr.length ;i++){
    if(arr[i]==target){
        return i;
    }
   
}
return -1;
}



console.log(findIndex([5,6,8,9,2],9))
