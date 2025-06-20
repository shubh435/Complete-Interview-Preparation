Q1 . Linear search is also called------
Answer B. sequential search
```
Explanation

Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise, the search continues till the end of the data set.

Hence Option (B) is the correct answer.
```

Q2 . Which of the following is correct recurrence for worst case of Binary Search?

Answer C. T(n) = T(n/2) + O(1) 
```
Explanation

Following is a typical implementation of Binary Search. 

// Searches x in arr[low..high].  If x is present, then returns its index, else -1
int binarySearch(int arr[], int low, int high, int x)
{
    if(high >= low)
    {
        int mid = low + (high - low)/2;
        if (x == arr[mid])
            return mid;
        if (x> arr[mid])
            return binarySearch(arr, (mid + 1), high);
        else
            return binarySearch(arr, low, (mid -1));
    }

    return -1;
}
In Binary Search, we first compare the given element x with middle of the array. If x matches with middle element, then we return middle index. Otherwise, we either recur for left half of array or right half of array. So recurrence is T(n) = T(n/2) + O(1)

Hence Option(C) is the correct answer
```

Q3 . Given a sorted array of integers, what can be the minimum worst-case time complexity to find ceiling of a number x in given array? The ceiling of an element x is the smallest element present in array which is greater than or equal to x. Ceiling is not present if x is greater than the maximum element present in array. For example, if the given array is {12, 67, 90, 100, 300, 399} and x = 95, then the output should be 100.

Answer : C O(log(n))

```
Explanation

We modify the standard binary search to find the ceiling. The time complexity T(n) can be written as T(n) <= T(n/2) + O(1) Solution of the above recurrence can be obtained by Master Method. It falls in case 2 of the Master Method. The solution is O(Logn). 

int ceilSearch(int arr[], int low, int high, int x)
{
    int mid;

    /* If x is smaller than or equal to the first element,
      then return the first element */
    if (x <= arr[low])
        return low;

    /* If x is greater than the last element, then return -1
     */
    if (x > arr[high])
        return -1;

    /* get the index of middle element of arr[low..high]*/
    mid = (low + high) / 2; /* low + (high - low)/2 */

    /* If x is same as middle element, then return mid */
    if (arr[mid] == x)
        return mid;

    /* If x is greater than arr[mid], then either arr[mid +
      1] is ceiling of x or ceiling lies in
      arr[mid+1...high] */
    else if (arr[mid] < x) {
        if (mid + 1 <= high && x <= arr[mid + 1])
            return mid + 1;
        else
            return ceilSearch(arr, mid + 1, high, x);
    }

    /* If x is smaller than arr[mid], then either arr[mid]
       is ceiling of x or ceiling lies in arr[mid-1...high]
     */
    else {
        if (mid - 1 >= low && x > arr[mid - 1])
            return mid;
        else
            return ceilSearch(arr, low, mid - 1, x);
    }
}
Hence Option(C) is the correct answer.
```


Q4. function f(Y, x) {
    let i = 0, j = 9;
    let k;
    do {
        k = Math.floor((i + j) / 2);
        if (Y[k] < x) {
            i = k;
        } else {
            j = k;
        }
    } while (Y[k] !== x && i < j);
    
    if (Y[k] === x) {
        console.log("x is in the array");
    } else {
        console.log("x is not in the array");
    }
}
In the above question, the correction needed in the program to make it work properly is


Answer :-  A. if( Y[k] < x)  i = k + 1; else j = k - 1;
```
Explanation

The code given in the questions is the implementation of the Binary Search.
Below is the corrected function:

f(int Y[10], int x) {
   int i, j, k;
   i = 0; j = 9;
   do {
           k =  (i + j) /2;
           if( Y[k] < x)  i = k + 1; else j = k - 1;
       } while(Y[k] != x && i < j);
   if(Y[k] == x) printf ("x is in the array ") ;
   else printf (" x is not in the array ") ;
}
Hence Option(A) is the correct option.
```
Q5. Which of the following is the correct recurrence for the worst case of Ternary Search?
Answer A  T(n) = T(n/3) + 4, T(1) = 1


```
Explanation

Following is a typical implementation of Binary Search. 

// A recursive ternary search function. It returns location of x in
// given array arr[l..r] is present, otherwise -1
int ternarySearch(int arr[], int l, int r, int x)
{
if (r >= l)
{
		int mid1 = l + (r - l)/3;
		int mid2 = mid1 + (r - l)/3;

		// If x is present at the mid1
		if (arr[mid1] == x) return mid1;

		// If x is present at the mid2
		if (arr[mid2] == x) return mid2;

		// If x is present in left one-third
		if (arr[mid1] > x) return ternarySearch(arr, l, mid1-1, x);

		// If x is present in right one-third
		if (arr[mid2] < x) return ternarySearch(arr, mid2+1, r, x);

		// If x is present in middle one-third
		return ternarySearch(arr, mid1+1, mid2-1, x);
}
// We reach here when element is not present in array
return -1;
}
In ternary search, we divide the given array into three parts and determine which has the key (searched element). We can divide the array into three parts by taking mid1 and mid2 which can be calculated as shown below. Initially, l and r will be equal to 0 and n-1 respectively, where n is the length of the array. So the recurrence relation is    T(n) = T(n/3) + 4, T(1) = 1

Hence Option (A) is the correct answer.
```

Q6. The increasing order of performance  of the searching algorithms are:

Answer : A linear search  <  jump search  <  binary search

```
Explanation

Like Binary Search, Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.
For example, suppose we have an array arr[] of size n and a block (to be jumped) of size m. Then we search in the indexes arr[0], arr[m], arr[2m]…..arr[km], and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x.

Performance in comparison to linear and binary search:
If we compare it with linear and binary search then it comes out then it is better than linear search but not better than binary search. The increasing order of performance is:

linear search  <  jump search  <  binary search

Hence Option(A) is the correct answer.
```

Q7. The average case occurs in the Linear Search Algorithm when:

Answer ;-  A

```
Explanation

The average case occurs in the Linear Search Algorithm when the item to be searched is in some where middle of the Array.
The best case occurs in the Linear Search Algorithm when the item to be searched is in starting of the Array.
The worst case occurs in the Linear Search Algorithm when the item to be searched is in end of the Array or not in the array.
So, option (A) is correct.
```

Q8. Consider a sorted array of n numbers and a number x. What would be the time complexity of the best known algorithm to find a triplet with sum equal to x. For example, arr[] = {1, 5, 10, 15, 20, 30}, x = 40. Then there is a triplet {5, 15, 20} with sum 40.
Answer: B O(n2)


```Explanation

We need to fix every element one by one, then apply two pointer approach to find the pair with x minus the fixed element in remaining array after the fixed element. Please see method 3 of Find a triplet that sum to a given value

Hence Option(B) is the correct Option.
```

Q9. function ProcessArray(listA, x, n) {
    let i = 0;
    let j = n - 1;
    let k;
    do {
        k = Math.floor((i + j) / 2);
        if (x <= listA[k])
            j = k - 1;
        if (listA[k] <= x)
            i = k + 1;
    } while (i <= j);
    if (listA[k] === x)
        return k;
    else
        return -1;
}
Which one of the following statements about the function ProcessArray is CORRECT?


Answer - Option(B) implementation of Binary Search
Explanation

The function is iterative implementation of Binary Search.  k keeps track of current middle element. i and j keep track of left and right corners of current subarray

Hence Option(B) is the correct answer.

Q10. The average number of key comparisons done in a successful sequential search in a list of length n is

Answer :- (D) (n+1)/2 

Explanation

If element is at 1 position then it requires 1 comparison. If element is at 2 position then it requires 2 comparison. If element is at 3 position then it requires 3 comparisons. Similarly, If element is at n position then it requires n comparison.

Total comparison = n(n+1)/2
For average comparison = (n(n+1)/2) / n = (n+1)/2 

Option (D) is correct.
