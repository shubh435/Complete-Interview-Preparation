Q1. What is the time complexity of fun()? 

function fun(n) {
    let count = 0;
    for (let i = 0; i < n; i++)
        for (let j = i; j > 0; j--)
            count++;
    return count;
}


Answer :- Theta(n2)
The time complexity can be calculated by counting the number of times the expression "count = count + 1;" is executed. The expression is executed 0 + 1 + 2 + 3 + 4 + .... + (n-1) times.

Time complexity = Theta(0 + 1 + 2 + 3 + .. + n-1) = Theta (n*(n-1)/2) = Theta(n2)


Q2. O(n) is the worst case time complexity, so among the given options it can represent :-
Explanation

If  (O(n)) is the worst-case time complexity, it means that the algorithm's time complexity grows linearly with the size of the input ((n)). Among the given options:

- (O(n^2)) represents a quadratic time complexity, which is worse than linear ((O(n))).
- (O(1)) represents constant time complexity, which is better than linear ((O(n))).
- (O(n log n)) represents a time complexity between linear and quadratic, known as linearithmic or log-linear time complexity.

Therefore, among the given options, (O(1)) is the one that represents a better (more efficient) time complexity than (O(n)). So, the correct answer is:

- (O(1))

Q3. Which of the following is not O(n2)?
Answer A
Explanation

The order of growth of option c is n2.5 which is higher than n2.


Q4. Which of the given options provides the increasing order of asymptotic complexity of functions f1, f2, f3, and f4?

  f1(n) = 2n
  f2(n) = n(3/2)
  f3(n) = n*log(n)
  f4(n) = nlog(n)


  Answer :- A
  Explanation

  f1(n) = 2^n
  f2(n) = n^(3/2)
  f3(n) = n*log(n)
  f4(n) = n^log(n)
Except for f3, all other are exponential. So f3 is definitely first in the output. Among remaining, n^(3/2) is next. One way to compare f1 and f4 is to take log of both functions. Order of growth of log(f1(n)) is Θ(n) and order of growth of log(f4(n)) is Θ(log(n) * log(n)). Since Θ(n) has higher growth than Θ(log(n) * log(n)), f1(n) grows faster than f4(n).

Following is another way to compare f1 and f4. Let us compare f4 and f1.

Let us take few values to compare

n = 32, f1 = 2^32, f4 = 32^5 = 2^25
n = 64, f1 = 2^64, f4 = 64^6 = 2^36
...............
............... 


Q5. Consider the following function,

 int unknown(int n) {
    int i, j, k = 0;
    for (i  = n/2; i <= n; i++)
        for (j = 2; j <= n; j = j * 2)
            k = k + n/2;
    return k;
 }
What is the time complexity of the function? (GATE CS 2013)

Answer :- nlog(n)

Explanation

In the below explanation, '^' is used to represent exponent: The outer loop runs n/2 or Theta(n) times. The inner loop runs (Logn) times (Note that j is multiplied by 2 in every iteration). So the overall time complexity is nLogn.

Q6. The recurrence equation
T(1) = 1
T(n) = 2T(n - 1) + n, n ≥ 2 
evaluates to a. 2n + 1- n - 2 b. 2n - n c. 2n + 1 - 2n - 2 d. 2n + n

Explanation

If draw recursion tree, we can notice that total work done is, T(n) = n + 2(n-1) + 4(n-2) + 8(n-3) + 2n-1 * (n - n + 1) T(n) = n + 2(n-1) + 4(n-2) + 8(n-3) + 2n-1 * 1 To solve this series, let us use our school trick, we multiply T(n) with 2 and subtract after shifting terms.
2*T(n) =     2n + 4(n-1) + 8(n-2) + 16(n-3) + 2n 
  T(n) = n + 2(n-1) + 4(n-2) + 8(n-3) + 2n-1 * 1
We get
2T(n) - T(n) =  -n + 2 + 4 + 8 + ..... 2n
T(n) = -n + 2n+1 - 2 [Applying GP sum formula for 2, 4, ...]
     = 2n+1 - 2 - n
Alternate Way to solve is to use hit and try method.
Given T(n) = 2T(n-1) + n and T(1) = 1

For n = 2, T(2) = 2T(2-1) + 2 
                = 2T(1) + 2 
                = 2.1 + 2 = 4

Now when you will put n = 2 in all options, 
only 1st option 2^(n+1) - n - 2 satisfies it. 

Q7. Consider the following three claims:

I 
(n+k) 
m
 =θ(n 
m
 )
 where k and m are constants

II 
2 
n+1
 =O(2 
n
 )   
 

 III 2^{2n+1} = O(2^n)

Which of these claims is correct? (GATE CS 2003)

A
Explanation

(I)  (n+m)k = nk + c1*n(k-1) + ... km = 
t
h
e
t
a
theta
(nk)(II)  2(n+1) = 2*2n = O(2n)

Q8. Consider the following  code segment:

int f (int x)
{
      if (x < 1)  return 1;
      else return (f(x-1) + g(x))
}

int g (int x)
{
      if (x < 2) return 2;
      else return (f(x-1) + g(x/2));
}
Of the following, which best describes the growth of f(x) as a function of x? 
Exponential
Explanation

f(n) = f(n-1) + g(n) ----> 1
g(n) = f(n-1) + g(n/2) ----> 2
Putting the value of g(n) in equation 1,

f(n) = 2*f(n-1) + g(n/2)
So, we can derive the below equation,

f(n) > 2f(n-1)
f(n) > 2*2*f(n-2), because f(n) > 2*f(n-1), so, f(n-1) > 2*f(n-2)

So we can write f(n) > 2*2*f(n-2)
so on....

=> f(n) > (2^n)f(1)
So, f(n) > Theta(2^n)
So option C is correct.



Q9. What is the time complexity of following function fun()? Assume that log(x) returns log value in base 2.

void fun(int n)
{
   int i, j;
   for (i=1; i<=n; i++)
      for (j=1; j<=log(i); j++)
         printf("GeeksforGeeks");
}
nlong(n)

Explanation

The time complexity of above function can be written as: Θ(log 1) + Θ(log 2) + Θ(log 3) + . . . . + Θ(log n) which is Θ (log n!) Order of growth of ‘log n!’ and ‘n log n’ is same for large values of n, i.e., Θ (log n!) = Θ(n log n). So time complexity of fun() is Θ(n log n). The expression Θ(log n!) = Θ(n log n) can be easily derived from following Stirling’s approximation (or Stirling’s formula)

log n! = n log n - n + O(log(n))
Option (B) is correct.

Q10. What is the output of the following recursive function when called with n=5?

int foo(int n) {
	if(n == 0) 
      return 1;
	else 
      return n * foo(n - 1);
}

Answer : c
Explanation

The given recursive function calculates the factorial of a non-negative integer n.

When the function is called with n=5, the function checks whether n is equal to 0. Since n is not equal to zero, it returns the value of n times the value of the same function called with n-1 as input. This recursive call continues until the base case (n==0) is reached.

The calculation for foo(5) would be: foo(5) = 5 * foo(4) foo(4) = 4 * foo(3) foo(3) = 3 * foo(2) foo(2) = 2 * foo(1) foo(1) = 1 * foo(0) foo(0) = 1

Substituting foo(0) = 1 in foo(1): foo(1) = 1 * 1 = 1 Substituting foo(1) = 1 in foo(2): foo(2) = 2 * 1 = 2 Substituting foo(2) = 2 in foo(3): foo(3) = 3 * 2 = 6 Substituting foo(3) = 6 in foo(4): foo(4) = 4 * 6 = 24 Substituting foo(4) = 24 in foo(5): foo(5) = 5 * 24 = 120

Therefore, the output of the function when called with n=5 is 120, which is option C.



