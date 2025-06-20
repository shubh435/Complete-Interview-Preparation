/**
 * 
 * Given an unsorted array of N elements and an element X. The task is to write a recursive function to check whether the element X is present in the given array or not.

Example:
array[] = {1, 2, 3, 4, 5}
X = 3.

The function should return True, as 3 is 
present in the array.
 */

function recursiveSearch(arr, left, right, search) {
    if (left > right) return false;
    if (arr[left] === search) return true;
    return recursiveSearch(arr, left + 1, right, search);
}
