/**
 * 
 * Remove Duplicates from a Sorted Linked List
Difficulty: EasyAccuracy: 49.37%Submissions: 315K+Points: 2Average Time: 20m
Given a singly linked list. The task is to remove duplicates (nodes with duplicate values) from the given list (if it exists).
Note: Try not to use extra space. The nodes are arranged in a sorted way.


 */


/**
 * @param {Node} head
 * @returns {Node}
 */

// /**/
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


class Solution {
     constructor(data){
        this.data = data;
        this.next = null;
    }
    // Function to remove duplicates from sorted linked list.
    removeDuplicates(head) {
        // your code here
        if(head==null || head.next===null) return head;
        let current = head;
        while(current!==null && current.next !== null){
            if(current.data === current.next.data){
                let temp = current.next;
                current.next = temp.next;
                temp.next = null;
            }else{
                current = current.next;
            }
        }
        return head;
    }
}




// optional

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// Test
let head = createLinkedList([1, 1, 2, 3, 3,1]);
let obj = new Solution()
head = obj.removeDuplicates(head);
printLinkedList(head); // Output: 1 -> 2 -> 3