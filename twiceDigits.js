var array =[];
for (let i = 0; i <101; i++) {
    array.push(i);
}
console.log(array);

var RepeatedDigit = [];
 
for(let i = 0; i<101; i++){
    if (array[i] % 11 == 0 ) {
        RepeatedDigit.push(array[i])
    }
}
console.log(RepeatedDigit);