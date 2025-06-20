/**
 * 
 * Array insert at index
Difficulty: BasicAccuracy: 44.81%Submissions: 105K+Points: 1
Insertion is a basic but frequently used operation. Arrays in most languages cannnot be dynamically shrinked or expanded. Here, we will work with such arrays and try to insert an element at some index.

You are given an array arr(0-based index). The size of the array is given by sizeOfArray. You need to insert an element at given index.

Example 1:

Input:
sizeOfArray = 6
arr[] = {1, 2, 3, 4, 5}
index = 5, element = 90
Output: 1 2 3 4 5 90
Explanation: 90 is inserted at index
5(0-based indexing). After inserting,
array elements are like
1, 2, 3, 4, 5, 90.
Example 2:

Input:
sizeOfArray = 6
arr[] = {1, 2, 3, 4, 5}
index = 2, element = 90
Output: 1 2 90 3 4 5
Explanation: 90 is inserted at index 
2(0-based indexing). After inserting,
array elements are like 
1, 2, 90, 3, 4, 5.
Your Task:
You don't need to read input or print anything.. The input is already taken care of by the driver code. You only need to complete the function insertAtIndex() that takes arr, sizeOfArray, index, element as input and modifies the array arr as per requirements. The printing is done by driver code.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

Constraints:
1 <= sizeOfArray <= 10000
0 <= element, arri <= 106
0 <= index <= sizeOfArray-1
 */


const insertAtIndex = (arr, sizeOfArray, pos, element) => {
    if (pos < 0 || pos >= sizeOfArray) {
        return arr;
    }

    const idx = pos-1;
    for(let i = arr.length - 1; i >= idx; i--){
      arr[i + 1] = arr[i];
    }
    arr[idx] = element;
    return arr;
}

console.log(insertAtIndex([1, 2, 3, 4, 5], 6, 5, 90)); 
console.log(insertAtIndex([1, 2, 3, 4, 5], 6, 2, 90));
console.log(insertAtIndex([1, 2, 3, 4, 5], 6, 3, 90));
console.log(insertAtIndex([1, 2, 3, 4, 5], 6, 1, 90));