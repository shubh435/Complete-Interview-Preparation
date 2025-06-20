/**
 * 
 * Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.

Floor value of any number is the greatest Integer which is less than or equal to that number

Examples:

Input: n = 4
Output: 2
Explanation: Since, 4 is a perfect square, so its square root is 2.
Input: n = 11
Output: 3
Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.
 */

class Solution {
  floorSqrt(n) {
    // your code here
    if (n < 1) return 0;
    if (n === 1) return 1;
    let start = 0,
      end = n;
    let res = 0;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (mid <= n / mid) {
        res = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return res;
  }
}
