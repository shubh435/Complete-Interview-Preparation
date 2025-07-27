/**
Given the head, the head of a singly linked list, Returns true if the linked list is circular & false if it is not circular.

A linked list is called circular if it is not NULL terminated and all nodes are connected in the form of a cycle. 

Note: The linked list does not contain any inner loop.
*/

class Solution {
    isCircular(head) {
        // code here
        if(head === null) return false;
        let cur = head.next;
        while(cur!==head && cur!== null){
            cur=cur.next;
        }
        
        return cur === head;
    }
}