Q1 . Linear search is also called------
Answer B. sequential search
Explanation

Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise, the search continues till the end of the data set.

Hence Option (B) is the correct answer.


Q2 . Which of the following is correct recurrence for worst case of Binary Search?

Answer C. T(n) = T(n/2) + O(1) 
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


Q3 . Given a sorted array of integers, what can be the minimum worst-case time complexity to find ceiling of a number x in given array? The ceiling of an element x is the smallest element present in array which is greater than or equal to x. Ceiling is not present if x is greater than the maximum element present in array. For example, if the given array is {12, 67, 90, 100, 300, 399} and x = 95, then the output should be 100.

Answer : C O(log(n))
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

Q4. 