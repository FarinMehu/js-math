// write a code which will return the largest element of an array

function largestElement(arr) {
    var large = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element > large) {
            large = element;
        }
    }
    return large;

}
var arr = [45, 75, 54, 15, 98, 15, 045, 58];
var result = largestElement(arr);
console.log(result);