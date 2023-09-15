const isPrime = number =>{
    if(number === 2)return true;
    if(number< 2)return false;
    for (let i = 2; i <  number; i++) {
        if (number%i==0) return false;
 }
 return true;

}
const numberPrime = num =>  {
    let i = 0;
    let  number = 0;
    let countPrime = 0 ;
    while (countPrime != num) {
        
if(isPrime (i)) {
    number= i;
    countPrime++;

}
i++;
        
    } 
    return number;
}
console.log(numberPrime(6));
console.log(numberPrime(10001));