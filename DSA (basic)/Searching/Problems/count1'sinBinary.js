/**
 * 
 * Count 1's in binary array
Difficulty: EasyAccuracy: 49.3%Submissions: 60K+Points: 2Average Time: 20m
Given a binary sorted non-increasing array of 1s and 0s. You need to print the count of 1s in the binary array.

Example 1:

Input:
N = 8
arr[] = {1,1,1,1,1,0,0,0}
Output: 5
Explanation: Number of 1's in given 
binary array : 1 1 1 1 1 0 0 0 is 5.
Example 2:

Input:
N = 8
arr[] = {1,1,0,0,0,0,0,0}
Output: 2
Explanation: Number of 1's in given 
binary array : 1 1 0 0 0 0 0 0 is 2.
 */


class Solution {

    countOnes(arr, N) {
        // your code here
        let count = 0
      for(let i =0; i<arr.length;i++){
          if(arr[i]===1) count+=1
      }
       
       return count;
        
    }
}