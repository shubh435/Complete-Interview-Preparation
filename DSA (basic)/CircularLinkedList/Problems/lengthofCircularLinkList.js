/**
 * 
 * 
 * Given a circular linked list of size n, you need to find the length of the list (total number of nodes). The tail of the linked list is connected to head.
 */



class Solution {
    getLength(head) {
        // code here
        if(head===null) return 0;
        let  count = 1;
        let cur = head.next;
        while(cur!==head){
            count+=1;
            cur = cur.next;
        }
        return count;
    }
}