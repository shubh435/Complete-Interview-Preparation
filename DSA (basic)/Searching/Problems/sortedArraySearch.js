/**
 * 
 * 
 * Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.

Examples:

Input: arr[] = [1, 2, 3, 4, 6], k = 6
Output: true
Exlpanation: Since, 6 is present in the array at index 4 (0-based indexing), output is true.
 */

class Solution {
  searchInSorted(arr, k) {
    // your code here
    let start = 0,
      end = arr.length;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === k) {
        return true;
      }
      if (arr[mid] < k) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }
}
