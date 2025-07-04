/**
 * 
Given a Binary Search Tree(BST) and a target. Check whether there's a pair of Nodes in the BST with value summing up to the target. 

Examples:

Input: root = [7, 3, 8, 2, 4, N, 9], target = 12
       bst
Output: True
Explanation: In the binary tree above, there are two nodes (8 and 4) that add up to 12.
Input: root = [9, 5, 10, 2, 6, N, 12], target = 23
          bst-3
Output: False
Explanation: In the binary tree above, there are no such two nodes exists that add up to 23.
 * 
 */

class Solution {
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
    findTarget(root, target) {
        // code here
        const seen = new Set();
        function inorder(node){
            if(!node) return false;
            if(seen.has(target-node.data)){
                return true;
            }
            seen.add(node.data)
            return inorder(node.left) || inorder(node.right)
        }
        return inorder(root);
    }
}