// find the largest number between 3 numbers 

let x = 258;
let y = 245;
let z = 246;

// using the Math.max() function 
const smallest = Math.min(x, y, z);
console.log('smallest number is = ', smallest);

// using function 
function smallestNumber(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else {
        return c;
    }
}
var result = smallestNumber(296, 270, 154);
console.log('smallest is ', result);

// using condition 
if (x < y && x < z) {
    console.log('smallest is ', x);
}
else if (y < x && y < z) {
    console.log('smallest is ', y);
}
else {
    console.log('smallest is ', z);
}