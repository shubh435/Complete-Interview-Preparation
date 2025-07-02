
/**
 * Count Linked List Nodes
Difficulty: BasicAccuracy: 85.99%Submissions: 259K+Points: 1Average Time: 15m
Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.

Examples :

Input: LinkedList : 1->2->3->4->5

Output: 5
Explanation: Count of nodes in the linked list is 5, which is its length.
Input: LinkedList : 2->4->6->7->5->1->0
 
Output: 7
Explanation: Count of nodes in the linked list is 7. Hence, the output is 7.
Expected Time Complexity: O(n)
Expected Auxilliary Space: O(1)
 * 
 * 
 * 
 */




class Solution {
    // Function to count nodes of a linked list.
    getCount(head) {
        // Code here
        let count =0;
        let current = head;
        while(current!==null){
            count++;
            current = current.next;
        }
        
        return count;
        
    }
}