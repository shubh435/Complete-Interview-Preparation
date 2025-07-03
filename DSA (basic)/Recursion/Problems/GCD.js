


/**
 * 
 * GCD Euclid
Difficulty: BasicAccuracy: 67.08%Submissions: 11K+Points: 1Average Time: 15m
You are given two numbers a and b. Find their GCD using recursion.

Example 1:
Input:
a = 7, b = 8
Output: 1

 */



class Solution {
    GCD(a, b) {
        // code here
       return b==0 ? a : this.GCD(b,a%b)
        
    }
}
