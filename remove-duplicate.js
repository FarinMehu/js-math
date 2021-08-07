// write a code which will remove duplicate numbers from an Array. 

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'd', 'w', 'a', 'r', 'b', 'g'];

function removeDuplicate(names) {
    new_array = [];
    for (const element of array) {
        if (new_array.indexOf(element) == -1) {
            new_array.push(element);
        }
    }
    return new_array;
}
const uniqueNames = removeDuplicate(array);
console.log(uniqueNames);