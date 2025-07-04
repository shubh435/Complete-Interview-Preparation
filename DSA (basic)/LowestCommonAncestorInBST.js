/** 
Lowest Common Ancestor in a BST
Difficulty: EasyAccuracy: 65.2%Submissions: 159K+Points: 2Average Time: 20m
Given a Binary Search Tree (with all values unique) and two nodes n1 and n2 (n1 != n2). You may assume that both nodes exist in the tree. Find the Lowest Common Ancestor (LCA) of the given two nodes in the BST.

LCA between two nodes n1 and n2 is defined as the lowest node that has both n1 and n2 as descendants (where we allow a node to be a descendant of itself).

Examples:

Input: root = [5, 4, 6, 3, N, N, 7, N, N, N, 8], n1 = 7, n2 = 8
        
Output: 7
Explanation: 7 is the closest node to both 7 and 8, which is also an ancestor of both the nodes.
Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], n1 = 8, n2 = 14
                
Output: 8
Explanation: 8 is the closest node to both 8 and 14, which is also an ancestor of both the nodes.
Input: root = [2, 1, 3], n1 = 1, n2 = 3
        
Output: 2
Explanation: 2 is the closest node to both 1 and 3, which is also an ancestor of both the nodes.
Constraints:
1 <= number of nodes <= 105
1 <= node->data <= 105
1 <= n1, n2 <= 105



Hint :- youtube video linke :- https://www.youtube.com/watch?v=fehixeGZY9k

*/



class Solution {
    constructor(data){
       this.data = data;
       this.left = null;
       this.right = null;
   }
   LCA(root, n1, n2) {
       // your code here
       if(n1.data < root.data && n2.data <root.data){
           return this.LCA(root.left,n1,n2);
       }else if (n1.data>root.data && n2.data > root.data ){
           return this.LCA(root.right,n1,n2);
       }else {
           return root;
       }
   }
}


// const obj = new Solution();
// const res = obj.LCA([5, 4, 6, 3, N, N, 7, N, N, N, 8],7,8);
// console.log(res.data);

