function recursiceFactorial(n){
if(n<1){
    return 1;
}
return n * recursiceFactorial(n-1);
}

console.log(recursiceFactorial(0));
console.log(recursiceFactorial(1));
console.log(recursiceFactorial(4));
console.log(recursiceFactorial(6 ));