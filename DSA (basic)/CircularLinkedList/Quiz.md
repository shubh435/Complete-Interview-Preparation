Q1. # Python3 program for the above operation

def addAfter(self, data, item):

	if (self.last == None):
		return None

	temp = Node(data)
	p = self.last.next
	while p:
		if (p.data == item):
			temp.next = p.next
			p.next = temp

			if (p == self.last):
				self.last = temp
				return self.last
			else:
				return self.last
		p = p.next
		if (p == self.last.next):
			print(item, "not present in the list")
			break
Answer :  O(n)

Explanation

The time complexity of the addAfter function depends on the position of the item in the linked list. In the best case, when the item is the last element of the linked list, the time complexity of the function is O(1), as it simply adds the new node at the end of the linked list.

However, in the worst case, when the item is not present in the linked list or it is the first element of the linked list, the function needs to traverse the entire linked list to find the item, which takes O(n) time, where n is the number of elements in the linked list.

Therefore, the worst-case time complexity of the addAfter function is O(n).

Q2. What is the time complexity of searching for an element in a circular linked list?

Answer :- O(n)
Explanation

The time complexity of searching for an element in a circular linked list is O(n), where n is the number of elements in the linked list. This is because, in the worst case, we may need to traverse the entire linked list before finding the desired element.

Q3. Which of the following application makes use of a circular linked list?

Answer :- C
Explanation

Generally, round robin fashion is employed to allocate CPU time to resources which makes use of the circular linked list data structure. Recursive function calls use stack data structure. Undo Operation in text editor uses doubly linked lists. Hash tables uses singly linked lists.

Q4. __ linked list stores the address of the header node in the next field of the last node ?


Answer :- Circular linked
Explanation

Circular linked list stores the address of the header node in the next field of the last node.



Q5. Which of the following is true about a circular linked list?
Answer :- O(n)
Explanation

Time complexity for deleting the last node is O(n) is true.

Q6. In a circular linked list

Answer : A

Explanation

A option is true for circular linked list.

Q7. Which of the following is true about a circular linked list?
a) Every node has a successor
b) Time complexity of inserting a new node at the head of the list is O(n)
c) Time complexity for deleting the last node is O(n)
d) We can traverse the whole circular linked list by starting from any point
Answer : All of the above
Explanation

The correct option is:

All of the above
Explanation:

a) Every node has a successor: In a circular linked list, every node points to its successor, forming a cycle. Therefore, every node has a successor.

b) The time complexity of inserting a new node at the head of the list is O(n): In a circular linked list, to insert a new node at the head, you need to update the next pointer of the last node to point to the new head. This requires traversing the entire list, resulting in a time complexity of O(n).

c) Time complexity for deleting the last node is O(n): Similar to insertion, to delete the last node in a circular linked list, you need to update the next pointer of the second-to-last node. This also requires traversing the entire list, resulting in a time complexity of O(n).

d) We can traverse the whole circular linked list by starting from any point: Since the linked list is circular, starting from any node and following the next pointers will eventually lead you through all the nodes in the list.

Therefore, all the statements (a, b, c, and d) are true for a circular linked list.

Q8. The worst case time complexity also happens to be O(n) when element need to 
Answer : Insert at (n-1)th
Explanation

The worst case time complexity of inserting an element at the (n)th position in a linked list is O(n) because in the worst case, we may need to traverse the entire list to reach the (n-1)th node, where we can insert the new node. Inserting at the (n-1)th, (n-2)th, or (n-3)th position would have a worst case time complexity of O(n) as well, as we may still need to traverse the entire list to reach the node before the insertion point.

Q9. Traversal space complexity for circular linked list is

A  O(1)
Explanation

The traversal space complexity for a circular linked list is O(1). This is because we only need to keep track of a single pointer to traverse the entire list, and we do not need to create any additional data structures to store the elements of the list. As we traverse the list, we simply move from one node to the next by following the "next" pointers, and we do not need to store any additional information.


Q10.In a singly linked list, if the first node needs to be deleted, what is the time complexity of the operation?

A  O(1)
Explanation

When the element to be deleted is the first node in a singly linked list, the time complexity is O(1). This is because we only need to update the head pointer to point to the second node, effectively removing the first node from the list. However, if we need to search for the first node, the time complexity would be O(n) in the worst case.

