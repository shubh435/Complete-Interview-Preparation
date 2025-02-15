
/**
 * Fixing Two nodes of a BST
Difficulty: HardAccuracy: 53.68%Submissions: 56K+Points: 8Average Time: 45m
Given the root of a Binary search tree(BST), where exactly two nodes were swapped by mistake. Your task is to fix (or correct) the BST by swapping them back. Do not change the structure of the tree.
Note: It is guaranteed that the given input will form BST, except for 2 nodes that will be wrong. All changes must be reflected in the original Binary search tree(BST).
 
Examples :
Input: root = [10, 5, 8, 2, 20]
     
Output: 1
       

Explanation: The nodes 20 and 8 were swapped. 
Input: root = [5, 10, 20, 2, 8]
     
Output: 1 
     
Explanation: The nodes 10 and 5 were swapped.
Constraints:
1 ≤ Number of nodes ≤ 103
 */


class Solution {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    correctBST(root) {
        // your code here
        let first = null, second = null, prev = null;
        function inorder(node) {
            if (!node) return;
            inorder(node.left);
            if (prev && node.data < prev.data) {
                if (!first) {
                    first = prev;
                }
                second = node;
            }
            prev = node;
            
            inorder(node.right);
        }

        inorder(root);
   
        if (first && second) {
            [first.data, second.data] = [second.data, first.data];
        }
        
        return 1;
    }
}
