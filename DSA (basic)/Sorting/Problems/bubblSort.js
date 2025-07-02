/**
 * Bubble Sort
Difficulty: EasyAccuracy: 59.33%Submissions: 298K+Points: 2Average Time: 15m
Given an array, arr[]. Sort the array using bubble sort algorithm.

Examples :

Input: arr[] = [4, 1, 3, 9, 7]
Output: [1, 3, 4, 7, 9]
Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Input: arr[] = [1, 2, 3, 4, 5]
Output: [1, 2, 3, 4, 5]
Explanation: An array that is already sorted should remain unchanged after applying bubble sort.
Constraints:
1 <= arr.size() <= 103
1 <= arr[i] <= 103
 */
class Solution {
    // Function to sort the array using bubble sort algorithm.
    bubbleSort(arr) {
        // code here
        let swapped = false;
        for(let i=0; i< arr.length;i++){
            swapped=false;
            for(let j=0;j<arr.length;j++){
                if(arr[j]>arr[j+1]){
                    
            
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                    
                swapped=true;
            }
                }
              if(!swapped) break
        }
        return arr;
      
    }
}