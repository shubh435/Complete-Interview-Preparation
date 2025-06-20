
/**
 * 
 * 
 * Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

Examples:

Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
Output: 1
Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.
Input: arr[] = [7]
Output: 7
Explanation: Since, 7 is single element and present more than 1/2 times, so it is the majority element.

 */



class Solution {
    majorityElement(arr) {
        // code here
        const k = arr.length/2;
        let freqSet = {}
        for(let i=0;i< arr.length; i++){
            freqSet[arr[i]] = (freqSet[arr[i]] || 0) + 1;
            if(freqSet[arr[i]]>k) return arr[i]
        }
        return -1;
    }
}