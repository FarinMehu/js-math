// write a code which will return the series of Fibonacchi
// [0,1,1,2,3,5,8,13,21,34,55,89,144,..... ]
// nth = (n-1)th + (n-2)th 


let fiboArray = [0, 1];
// using only for loop 
let limit = 10;
for (var i = 2; i < limit; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
}
// console.log(fiboArray);

// using function 
function fiboSeries(number) {
    let fibo_Array = [0, 1];
    let j = 2;
    if (typeof number != 'number') {
        console.log('Please give a number...');
    }
    if (number < 2) {
        console.log('Please give positive number which is greater than 0..');
    }
    while (j < number) {
        fibo_Array[j] = fibo_Array[j - 1] + fibo_Array[j - 2];
        j++;
    }
    return fibo_Array;
}
var result = fiboSeries(13);
console.log(result);