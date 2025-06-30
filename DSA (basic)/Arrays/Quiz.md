Q1. A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?
Answer : A array of 50 number

Explanation

An array of 50 numbers is correct.

Q2. public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2};
        System.out.println(arr[0] + ", " + arr[1]);
    }
}
Answer :- A 1,2
Explanation

The code declares an integer array arr with two elements, 1 and 2, and then prints them as 1, 2 using cout.

Q3. The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is
Answer :- O(log(n))
Explanation

If you answered Theta(1), then think of examples {1, 2, 2, 2, 4, 4}, {1, 1, 2, 2, 2, 2, 3, 3} The Best way to find out whether an integer appears more than n/2 times in a sorted array(Ascending Order) of n integers, would be binary search approach.

The First occurrence of an element can be found out in O(log(n)) time using divide and conquer technique,lets say it is i.
The Last occurrence of an element can be found out in O(log(n)) time using divide and conquer technique,lets say it is j.
Now number of occurrence of that element(count) is (j-i+1). Overall time complexity = log n +log n +1 = O(logn)
See Check for Majority Element in a sorted array This solution is contributed by Nirmal Bharadwaj

Q4. Let A be a square matrix of size n x n. Consider the following program. What is the expected output? 

C = 100
for i = 1 to n do
    for j = 1 to n do
    {
        Temp = A[i][j] + C
        A[i][j] = A[j][i]
        A[j][i] = Temp - C
    } 
for i = 1 to n do
    for j = 1 to n do
        Output(A[i][j]);

Answer :- A Matrix Itself
Explanation

If we take look at the inner statements of first loops, we can notice that the statements swap A[i][j] and A[j][i] for all i and j. Since the loop runs for all elements, every element A[l][m] would be swapped twice, once for i = l and j = m and then for i = m and j = l. Swapping twice means the matrix doesn’t change.


Q5. An algorithm performs (logN)1/2 find operations, N insert operations, (logN)1/2 , delete operations, and (logN)1/2 decrease-key operations on a set of data items with keys drawn from a linearly ordered set. For a delete operation, a pointer is provided to the record that must be deleted. For the decrease-key operation, a pointer is provided to the record that has its key decreased. Which one of the following data structures is the most suited for the algorithm to use, if the goal is to achieve the best total asymptotic complexity considering all the operations?
Answer :- A Unsorted Array
Explanation

The time complexity of insert in unsorted array is O(1), O(Logn) in Min-Heap, O(n) in sorted array and sorted DLL.

For unsorted array, we can always insert an element at end and do insert in O(1) time
For Min Heap, insertion takes O(Log n) time. Refer Binary Heap operations for details.
For sorted array, insert takes O(n) time as we may have to move all elements worst case.
For sorted doubly linked list, insert takes O(n) time to find position of element to be inserted.
Since number of insertion operations is asymptotically higher, unsorted array is preferred.

Q6 What will the output of the below code, be if the base address of the array is 1200?

#include <iostream>
using namespace std;
 
int main()
{
 
    int arr[] = { 1, 2, 3, 4, 5 };
    cout << arr << ", " << &arr << ", " << &arr[0] << endl;
    return 0;
}
Answer : 1200,1200,1200

Explanation

Given that, the base address of the array is 1200.

arr, &arr is pointing to the base address of the array arr.
&arr[0] is pointing to the address of the first element array arr (base address).

Q7. Let A[1...n] be an array of n distinct numbers. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. What is the expected number of inversions in any permutation on n elements ?
Answer : n(n-1)/2
Explanation

There are n(n-1)/2 pairs such that i < j. For a pair (ai, aj), probability of being inversion is 1/2. Therefore expected value of inversions = 1/2 * (n(n-1)/2) = n(n-1)/4.

Q8. A three dimensional array in ‘C++’ is declared as int A[x][y][z]. Consider that array elements are stored in row major order and indexing begins from 0. Here, the address of an item at the location A[p][q][r] can be computed as follows (where w is the word length of an integer):

Explanation

According to above question we have to find the address of A[p][q][r] To reach pth row we must have to cross 0 to p-1 row i.e. p rows and each rows contains y∗z elements Hence , = y∗z∗p Now to reach qth element in pth row we have to cross q rows and each row contains z(total columns) elements =z∗q to reach rth elements we have to cross r elements in (p+1)th row Total elements to cross =(y∗z∗p+z∗q+r) Now each element occupies m amount of space in memory Therefore total space occupied by these elements = m(y∗z∗p+z∗q+r) Hence , address of A[p][q][r]=base address+ Space Occupied by the Elements Before it. =&A[0][0][0]+m(y*z*p+z*q+r) Hence Option (B) is correct.

Q9. Which of the following correctly declares an array?
A 20
Explanation

Option A is correct. Int is the data type used, geeks is the name of the array and 20 is the size of the array.


Q10. Consider a two dimensional array A[20][10]. Assume 4 words per memory cell, the base address of array A is 100, elements are stored in row-major order and first element is A[0][0]. What is the address of A[11][5] ?

A 560
Explanation

Element A[11][0] is stored at "Base Address + 11 * 10 * 4" which is "Base Address + 440" = 540. So A[11][5] is stored at 540 + 5*4 = 560.