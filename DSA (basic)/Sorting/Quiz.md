Q1. What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?
Asnwer:- T(n) = T(n-1) + O(n), and the corresponding time complexity is O(n²)

Explanation

The worst case of QuickSort occurs when the picked pivot is always one of the corner elements in sorted array. In worst case, QuickSort recursively calls one subproblem with size 0 and other subproblem with size (n-1). So recurrence is T(n) = T(n-1) + T(0) + O(n) The above expression can be rewritten as T(n) = T(n-1) + O(n) .


Q2. Suppose we have an O(n) time algorithm that finds the median of an unsorted array. Now consider a QuickSort implementation where we first find the median using the above algorithm, then use the median as a pivot. What will be the worst-case time complexity of this modified QuickSort?

Answer:- nO(logn)

Explanation

If we use the median as a pivot element, then the recurrence for all cases becomes T(n) = 2T(n/2) + O(n)

The above recurrence can be solved using Master method. It falls in case 2 of the master method.
So, the worst-case time complexity of this modified QuickSort is O(nLogn). 


Q3. Which of the following is not a stable sorting algorithm in its typical implementation.
Answer : Quick Sort

Explanation

Quick Sort is not a stable sorting algorithm in its typical implementation.

Q4. Which of the following sorting algorithms in its typical implementation gives best performance when applied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).
Answer : Insertion sort
Explanation

Insertion sort takes linear time when input array is sorted or almost sorted (maximum 1 or 2 elements are misplaced). All other sorting algorithms mentioned above will take more than linear time in their typical implementation.

Q5. Given an unsorted array. The array has this property that every element in the array is at most k distance from its position in a sorted array where k is a positive integer smaller than the size of an array. Which sorting algorithm can be easily modified for sorting this array and what is the obtainable time complexity?
Answer: Heap Sort

Explanation

We can perform this in O(nlogK) time using heaps:

First, create a min-heap with first k+1 elements. Now, we are sure that the smallest element will be in this K+1 element. Now, remove the smallest element from the min-heap(which is the root) and put it in the result array. Next, insert another element from the unsorted array into the mean-heap, now, the second smallest element will be in this..extract it from the mean-heap and continue this until no more elements are in the unsorted array. Next, use a simple heap sort for the remaining elements.

Time Complexity:

O(k) to build the initial min-heap
O((n-k)logk) for remaining elements.

Thus we get O(nlogk). Hence, option B is correct.

Q6. Consider a situation where swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?
Answer : Selection Sort
Explanation

Selection sort makes O(n) swaps which is the minimum among all sorting algorithms mentioned above.

Hence Option(B) is the correct answer.
Q7. Suppose we are sorting an array of eight integers using quicksort, and we have just finished the first partitioning with the array looking like this:

2  5  1  7  9  12  11  10 


Which statement is correct?
ANswer : - A

Explanation

7 and 9 both are at their correct positions (as in a sorted array). Also, all elements on left of 7 and 9 are smaller than 7 and 9 respectively and on right are greater than 7 and 9 respectively.

Q8. Suppose we are sorting an array of eight integers using heapsort, and we have just finished some heapify (either maxheapify or minheapify) operations. The array now looks like this: 16 14 15 10 12 27 28 How many heapify operations have been performed on root of heap?
Answer : B-> 2

Explanation

In Heapsort, we first build a heap, then we do following operations till the heap size becomes 1. a) Swap the root with last element b) Call heapify for root c) reduce the heap size by 1. In this question, it is given that heapify has been called few times and we see that last two elements in given array are the 2 maximum elements in array. So situation is clear, it is maxheapify which has been called 2 times.

Hence Option(B) is the correct answer.

Q9. What is the best time complexity of bubble sort(optimised)?
Answer :- O(n)
Explanation

The bubble sort is at its best if the input data is sorted. i.e. If the input data is sorted in the same order as expected output. This can be achieved by using one boolean variable. The boolean variable is used to check whether the values are swapped at least once in the inner loop. Consider the following code snippet: 

int main()
{   
    int arr[] = {10, 20, 30, 40, 50}, i, j, isSwapped;
    int n = sizeof(arr) / sizeof(*arr);
    isSwapped = 1;
    for(i = 0; i < n - 1 && isSwapped; ++i)
    {
        isSwapped = 0;
        for(j = 0; j < n - i - 1; ++j)
            if (arr[j] > arr[j + 1])
            {
                swap(&arr[j], &arr[j + 1]);
                isSwapped = 1;
            }
    }
    for(i = 0; i < n; ++i)
        printf("%d ", arr[i]);
    return 0;
}
Please observe that in the above code, the outer loop runs only once.

Q10. What is the worst case time complexity of insertion sort where position of the data to be inserted is calculated using binary search?
Answer :- O(n2)
Explanation

Applying binary search to calculate the position of the data to be inserted doesn't reduce the time complexity of insertion sort.

This is because the insertion of data at an appropriate position involves two steps:

Calculate the position.
Shift the data from the position calculated in step #1 one step right to create a gap where the data will be inserted.
Using binary search reduces the time complexity in step #1 from O(N) to O(log(N)). But, the time complexity in step #2 still remains O(N).
 So, overall complexity remains O(N2).





