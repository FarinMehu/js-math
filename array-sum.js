// Write a code to sum all the elements in an array 

let arr = [258, 245, 246];
let sum = 0;

// usnig loop
var i = 0;
while (i < arr.length) {
    sum += arr[i];
    i++;
}
// console.log(sum);

// using function 
function arrayIndexAdd(arr) {
    var sum1 = 0;
    for (var j = 0; j < arr.length; j++) {
        sum1 += arr[j];
    }
    return sum1;
}
const result = arrayIndexAdd([258, 245, 246]);
console.log(result);