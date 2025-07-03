/**
 * @param {number} n
 * @param {number} p
 * @returns {number}
 * 
 * Power Using Recursion
Difficulty: BasicAccuracy: 75.78%Submissions: 48K+Points: 1
You are given two numbers n and p. You need to find np.

Examples:

Input: n = 9, p = 9 
Output: 387420489
Explanation: 387420489 is the value obtained when 9 is raised to the power of 9.
 */
class Solution {
    RecursivePower(n, p) {
        // code here
        if(p==0) return 1;
        return n * this.RecursivePower(n,p-1);
    }
}