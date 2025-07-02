Q1. Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?
Ans :- Merge Sort

Explanation

Both Merge sort and Insertion sort can be used for linked lists. The slow random-access performance of a linked list makes other algorithms (such as quicksort) perform poorly, and others (such as heapsort) completely impossible. Since worst case time complexity of Merge Sort is O(nLogn) and Insertion sort is O(n^2), merge sort is preferred. See following for implementation of merge sort using Linked List.

Q2. What is the output of following function in which start is pointing to the first node of the following linked list 1->2->3->4->5->6 ?

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function fun(start) {
    if (start === null)
        return;
    console.log(start.data + '  ');
    
    if (start.next !== null)
        fun(start.next.next);
    console.log(start.data + '  ');
}

Ans :- 135531

Explanation

The function prints the data of the current node and then recursively calls itself with the second next node (i.e., start->next->next).

So, it prints the data of every alternate node of the linked list i.e 1 3 5, and then, since the next->next of 5 is null, it returns and prints the data of the current node, so it then prints 5 3 1.

Therefore, for the given linked list 1->2->3->4->5->6, the function would print 1 3 5 5 3 1.


Q3. The following  function takes a single-linked list of integers as a parameter and rearranges the elements of the list. The function is called with the list containing the integers 1, 2, 3, 4, 5, 6, 7 in the given order. What will be the contents of the list after the function completes execution? 


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function rearrange(list) {
    if (list === null || list.next === null) {
        return;
    }
    let p = list;
    let q = list.next;
    while (q !== null) {
        [p.value, q.value] = [q.value, p.value];
        p = q.next;
        q = p !== null ? p.next : null;
    }
}

Ans

Explanation

The function rearrange() exchanges data of every node with its next node. It starts exchanging data from the first node itself.
For eg. 3,5,7,9,11
answer:- 5,3,9,7,11

Q4. In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is
Asn ; N

Explanation

In the worst case, the given element may not be present in the singly linked list of length n. Therefore, the search algorithm would need to traverse the entire list to determine that the element is not present.

Therefore, the number of comparisons needed to search a singly linked list of length n in the worst case is equal to n, which is the length of the list.

Q5. Suppose each set is represented as a linked list with elements in arbitrary order. Which of the operations among union, intersection, membership, cardinality will be the slowest? (GATE CS 2004)
Ans:- D
Explanation

Cardinality and membership are definitely not the slowest one. For cardinality, just count the number of nodes in a list. For membership, just traverse the list and look for a match
For getting intersection of L1 and L2, search for each element of L1 in L2 and print the elements we find in L2. 
There can be many ways for getting union of L1 and L2. One of them is as follows 
a) Print all the nodes of L1 and print only those which are not present in L2. 
b) Print nodes of L2.

Q6. Consider the function f defined below. 
class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function f(p) {
    return (
        p === null || 
        p.next === null || 
        (p.data <= p.next.data && f(p.next))
    );
}
For a given linked list p, the function f returns 1 if and only if (GATE CS 2003)
Ans: B
Explanation

The function checks if the current element is less than or equal to the next element, and recursively applies the same check to the next element. If the end of the list is reached (i.e., p->next is NULL), or the next element is less than the current element, the function returns 1. Otherwise, it returns 0. Therefore, the function returns 1 only if the linked list is sorted in non-decreasing order.

Q7. What are the time complexities of finding 8th element from beginning and 8th element from end in a singly linked list? Let n be the number of nodes in linked list, you may assume that n > 8.
Ans :- A
Explanation

Finding the 8th element from the beginning of a singly linked list requires traversing the first 8 nodes of the list, which takes O(8) time, or simply O(1) time since it's a constant time operation.

Finding the 8th element from the end of a singly linked list requires traversing the list until we reach the 8th node from the end. One way to do this is to first traverse the list once to determine its length, and then traverse the list again until we reach the node at position n-8. This takes O(n) time for the first traversal, and then O(n-8) time for the second traversal. Therefore, the time complexity of finding the 8th element from the end of a singly linked list is O(n).

Q8. Is it possible to create a doubly linked list using only one pointer with every node.
Ans : B
Explanation

Yes, it is possible to implement a doubly linked list using a single pointer per node, by storing the XOR of the addresses of the previous and next nodes.
Q9. Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X from given linked list?
Ans : A
Explanation

Following are simple steps.

    struct node *temp  = X->next;
    X->data  = temp->data;
    X->next  = temp->next;
    free(temp); 

Q10. Which of the following is an application of XOR-linked lists?
Answer:  C
Explanation

XOR linked lists are a memory-efficient representation of linked lists. They store the XOR combination of the addresses of the previous and next nodes, reducing the memory overhead compared to traditional linked lists.
