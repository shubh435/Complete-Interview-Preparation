#include <iostream>

class Solution {
  public:
    void printArrayRecursively(int arr[], int n) {
        // Your code here
              // code here
    
  if(n==0) return;
  printArrayRecursively(arr,n-1);
 
  cout << arr[n-1] << " ";
      
 
        // Use recursion to print array elements from start to end
    };
};