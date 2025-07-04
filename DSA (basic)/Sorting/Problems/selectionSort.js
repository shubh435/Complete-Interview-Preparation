/**
 * 
 * 
 * Selection Sort
Difficulty: EasyAccuracy: 64.33%Submissions: 208K+Points: 2Average Time: 15m
Given an array arr, use selection sort to sort arr[] in increasing order.

Examples :

Input: arr[] = [4, 1, 3, 9, 7]
Output: [1, 3, 4, 7, 9]
Explanation: Maintain sorted (in bold) and unsorted subarrays. Select 1. Array becomes 1 4 3 9 7. Select 3. Array becomes 1 3 4 9 7. Select 4. Array becomes 1 3 4 9 7. Select 7. Array becomes 1 3 4 7 9. Select 9. Array becomes 1 3 4 7 9.
Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Input: arr[] = [38, 31, 20, 14, 30]
Output: [14, 20, 30, 31, 38]
Constraints:
1 ≤ arr.size() ≤ 103
1 ≤ arr[i] ≤ 106
 */


class Solution {
    /**
     * @param {number[]} arr
     * @returns {number[]}
     */

    // Function to implement selection sort
    selectionSort(arr) {
        // your code here

        for(let i=0;i<arr.length-1;i++){
           let minIndex = i;
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex=j
                }
            }
             if(minIndex!==i){
                      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
                }
        }
        return arr;
    }
}