/**
 * 
 * 
 * 
 * Search In Linked List
Difficulty: BasicAccuracy: 67.62%Submissions: 14K+Points: 1Average Time: 15m
You are given a singly linked list of n elements, and also an element x. You need to find if x is present in the linked list or not. Return true if x is present else returns false. (1 is printed by the driver code if the returned value is true, otherwise 0)

Examples :

Input: LinkedList: 1->2->3->4->5, x = 4
Output: 1
Input: LinkedList: 2->4->6->7->5->1->0, x = 10
Output: 0
Constraints:
1 <= n <= 100
 */



class Solution {
    searchLinkedList(head, x) {
        // your code here
        let current = head;
        while(current !== null){
            if(current.data === x){
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
