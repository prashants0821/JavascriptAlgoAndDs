function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var lowest = i;
        for(j = i+1; j< arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(i !== lowest){
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        console.log(arr);
    }
}
    return arr;
}

selectionSort([34,22,10,19,17])