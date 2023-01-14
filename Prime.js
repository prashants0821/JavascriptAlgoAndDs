function Prime(n){

if(n<2){
    return false;

}
for(let i = 2; i<= Math.sqrt(n) ;i++){
if(n%i == 0){
    return false;
}
}
return true;
}




console.log(Prime(1));
console.log(Prime(2));
console.log(Prime(4));