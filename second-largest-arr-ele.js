// write a code which will return the second largest element of an array. 

function secondLargest(array) {
    let max1 = array[0];
    let max2 = array[1];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (element > max1) {
            // If current element of the array is first largest
            //   then make current max as second max
            //   and then max as current array element
            max2 = max1;
            max1 = element;

        }
        else if (element > max2 && element < max1) {
            // If current array element is less than first largest
            //  * but is greater than second largest then make it
            //  * second largest
            max2 = element;
        }
    }
    return max2;

}
var array = [45, 75, 54, 15, 98, 15, 045, 58];
var result = secondLargest(array);
console.log(result);