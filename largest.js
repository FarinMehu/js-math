// find the largest number between 3 numbers 

let x = 258;
let y = 245;
let z = 246;

// using the Math.max() function 
const largest = Math.max(x, y, z);
// console.log('Largest number is = ', largest);

// using function 
function largestNumber(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}
var result = largestNumber(296, 270, 154);
// console.log('Largest is ', result);

// using condition 
if (x > y && x > z) {
    console.log('Largest is ', x);
}
else if (y > x && y > z) {
    console.log('Largest is ', y);
}
else {
    console.log('Largest is ', z);
}