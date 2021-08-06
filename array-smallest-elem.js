// write a code which will return the smallest element of an array

function smallestElement(arr) {
    var small = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element < small) {
            small = element;
        }
    }
    return small;

}
var arr = [45, 75, 54, 15, 98, 15, 045, 58];
var result = smallestElement(arr);
console.log(result);