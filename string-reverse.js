// write a code which will reverse the string. 

// using 3 ways 

// 1st: Using Built in functions 
/*step-1: split() method 
step-2: reverse() method
step-3: join() method*/
function reverseFunction(str) {
    var splitStr = str.split("");
    var reverseArray = splitStr.reverse();
    var joinArray = reverseArray.join();
    return joinArray;
}
var result = reverseFunction("farin");
// console.log(result);


// 2nd: Using function 
/*step-1: Declare a empty String
  step-2: Start for loop or any other
    step-2.1: The starting point of the loop will be (str.length - 1) which corresponds to the last character of the string
    step-2.2: As long as i is greater than or equals 0, the loop will go on
    step-2.3: decreament i after each iteration. 
  step-3: return the reversed string. */
function reverse(str) {
    var revStr = '';
    for (var i = (str.length - 1); i >= 0; i--) {
        revStr += str[i];
    }
    /* for (var j of str) {
        revStr = j + revStr;
     } */
    return revStr;
}
var ans = reverse('mehu');
console.log(ans);


// 3rd: Using recursion 
/*For this solution, we will use two methods: the String.prototype.substr() method and the String.prototype.charAt() method.*/
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
// The charAt() method returns the specified character from a string.

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
var result = reverseString("hello");
console.log(result);