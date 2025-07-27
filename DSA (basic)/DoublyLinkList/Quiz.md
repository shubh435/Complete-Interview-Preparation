Q1. Which of the following is false about a doubly linked list?
a) We can navigate in both the directions
b) It requires more space than a singly linked list
c) The insertion and deletion of a node take a bit longer
d) Implementing a doubly linked list is easier than singly linked list
Answer :  c(d)

Explanation
4th sentence is false about doubly linked list.

Q2. The worst time complexity to insert element at begin of doubly linked list is?
Answer :-  O(1)
Explanation
Worst time complexity to insert element at begin of doubly linked list is O(1).


Q3. Time Complexities to Delete element from beginning and end in a doubly linked list are?

Note - for the end node tail reference is given.


Answer :- O(1),  O(1).
Explanation
Time Complexities to Delete element from beginning and end in a doubly linked list are O(1),  O(1).


Q4. Advantages of DLL over the singly linked list 
a) A DLL can be traversed in both forward and backward directions. 

b) The delete operation in DLL is more efficient if a pointer to the node to be deleted is given

c)Every node of DLL Requires extra space for a previous pointer

d)All operations require an extra pointer previous to be maintained


Answer :- a,b
Explanation
Sentences 1 and 2 are the advantages of doubly linked list over singly linked list.



Q5. What is the time complexity of the best-known algorithm to reverse a doubly linked list?

Answer :- O(n)
Explanation
O(N) is the time complexity of the best-known algorithm to reverse a doubly linked list.




Q6. what will the following code do?

Function f(head, x):
   Create a new node 'temp' with value 'x'
   If head is None:
       Return the new node 'temp'
   Else:
       Set 'curr' to point to 'head'
       While the next node after 'curr' is not None:
           Move 'curr' to the next node
       Set the next of 'curr' to 'temp'
       Set the previous of 'temp' to 'curr'
       Return 'head'

Answer : A
Explanation
The following code will insert the element at the end.

Q7. What is the time complexity of inserting a new node at the front of a doubly linked list?

Answer : O(1)
Explanation
O(1) is the time complexity of inserting a new node at the front of a doubly linked list.

Q8. What is the difference between a doubly linked list and a circular doubly linked list?

Q9. How does deleting a node from a doubly linked list differ from deleting a node from a singly linked list?

Explanation

Deleting a node from a doubly linked list requires updating both the next and previous pointers will be correct.





Q10. Which of the following operations can be performed efficiently on a doubly linked list?

Ans :D

Explanation

All of the above operations can be performed efficiently on a doubly linked list, as each node has a pointer to the previous and next node.