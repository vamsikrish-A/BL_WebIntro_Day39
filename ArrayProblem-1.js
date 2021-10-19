//a. Generetes 10 Random 3 digits number

for(let i = 0; i<=10; i++) {
    let random = Math.floor(Math.random() * 1000) % 999;
    if (random >=100 & random <= 999) {
        console.log("Random 3 digit number of "+i + "is: "+random)
    }
}

//b. Store this random numbers into a array..
console.log("----------------------------------------------")
var array =[];
for (let i = 0; i <= 10; i++){
    let random = Math.floor(Math.random() * 1000) % 999;
    if (random >=100 & random <=999) {
        array.push(random);
    }    
}
console.log("Random numbers in array is: "+array)

//c. finding second largest and smallest value in array without sorting

function secondLargest(array) {
    let max = -Infinity, result = -Infinity;
    for (const value of array) {
        const nr = Number(value)

        if(nr > max) {
            [result, max] = [max, nr] //save prevoius max
        } else if (nr < max && nr > result) {
            result = nr;  //new second largest.
        }
    }
    return result;
}
console.log("Second Largest"+secondLargest(array));

function secondSmallest(array) {
    let min = Infinity, res = Infinity;
    for (const value of array) {
        const mr = Number(value)

        if(mr < min) {
            [res, min] = [min, mr] //save prevoius max
        } else if (min < mr && res > mr) {
            res = mr;  //new second largest.
        }
    }
    return res;
}
console.log("Second Smallest number"+secondSmallest(array));


//2.sorting the array
array.sort(function(a,b){
    return b-a;
});
console.log("Second largest with sort: "+array[1]);

array.sort(function(a,b){
    return a-b;
});
console.log("Second smallest with sort: "+array[1]);