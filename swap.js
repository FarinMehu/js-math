// swaping using 4 methods 

var a = 8;
var b = 5;
console.log(a, b);

// 1st approach --> Using a temp variable
var temp = a;
a = b;
b = temp;
console.log(a, b);

//  2nd approach --> Using Destructuring assignment
[a, b] = [b, a];
console.log(a, b);

// 3rd approach --> Using arithmetic operation
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// 4th approach --> Using Bitwise XOR operator
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b);