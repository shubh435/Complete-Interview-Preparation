



// User function Template for javascript
/**
 * 
 * Linked List Delete at Position
Difficulty: EasyAccuracy: 50.06%Submissions: 15K+Points: 2Average Time: 15m
Given a linked list of size n, you have to delete the node at position pos of the linked list and return the new head. The position of initial node is 1.

Example 1:

Input:
LinkedList: 1->2->3->4->5
pos = 4
Output: 1 2 3 5
Example 2:

Input:
LinkedList: 2->5->7->8->99->100
pos = 6
Output: 2 5 7 8 99
Your Task:
The task is to complete the function deleteAtPosition() which takes head reference and pos as argument and returns reference to the new head node, which is then used to display the list. The printing is done automatically by the driver code.

Expected Time Complexity: O(pos).
Expected Auxiliary Space: O(1).
 * 
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
 * @param {number} pos
 * @return {Node}
 */

class Solution {
    deleteAtPosition(head, pos) {
        // code here
        if(head === null) return null;
        if(pos ===1){
            let newHead = head.next;
            head.next = null;
            return newHead;
        }
        let current = head;
        let count =1;
        while(current!== null && count < pos-1){
            current = current.next;
           count++;
        }
        
        if(current !== null &&  current.next !== null){
             let nodeToDel = current.next;
        current.next = nodeToDel.next;
        nodeToDel.next = null;
       
        }
         return head;
       
    }
}
