// User function Template for javascript
/**
Is Linked List Sorted
Difficulty: EasyAccuracy: 37.09%Submissions: 29K+Points: 2Average Time: 15m
Given a linked list of size n, you have to find whether the given linked list is sorted or not.
The sorting can either be non-increasing or non-decreasing.

Example 1:

Input:
LinkedList: 5->5->6->7->8
Output: 1
Example 2:

Input:
LinkedList: 2->5->7->8->99->7
Output: 0

*/
/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
    isSorted(head) {
        // code here
        if(head === null || head.next ===null) return true;
        let increasing = true;
        let decreasing = true;
        let current = head;
        while(current.next !== null){
            if(current.data > current.next.data){
                increasing = false;
            }
            if(current.data < current.next.data){
                decreasing = false;
            }
            
            current = current.next;
        }
        
        return increasing || decreasing;
    }
}
