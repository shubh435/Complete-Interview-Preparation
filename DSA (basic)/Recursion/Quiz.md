Q1. What is the main characteristic of recursion?
Answer B
Explanation

The execution of a function within itself is correct.

Q2. What is a base case in recursion?
Answer : C
Explanation

The condition that stops the function from calling itself is called base case in recursion.

Q3. What happens if the base case is not defined in a recursive function?
Ans :  A
Explanation

The function will run forever, resulting in a stack overflow error.

Q4. Which of the following statement isn't correct between tail recursion and non-tail recursion?
Ans: C
Explanation

Tail recursion occurs when the recursive call is the last operation in a function, not at the beginning. The key feature of tail recursion is that no additional operations are performed after the recursive call.

Non-tail recursion, on the other hand, involves performing additional operations after the recursive call. These additional operations can be executed before or after the recursive call, and they can involve single or multiple recursive calls. The key difference between tail and non-tail recursion is the position of the recursive call in the function's execution flow.
Q5. What is the result of the following pseudocode when called with an input of 4?

function recursion(n)
   if n == 1
       return 1
   else
       return n * recursion(n-1)

print(recursion(4))
Ans: B
Explanation

Result will be 24.

Q6. What is the output of the following pseudocode when called with an input of 3?

function recursion(n)
   if n == 0
       return 0
   return n + recursion(n-1)

print(recursion(3))
Ans : A
Explanation

Output will be 6.

Q7. How many times will the following pseudocode be executed when called with an input of 3?

function recursion(n)
   if n == 0
       return
   print(n)
   recursion(n-1)

recursion(3)
Ans : B
Explanation

The pseudo code will run 4 times.

Q8. What is the purpose of the stack data structure when used in a recursive algorithm?
Ans. D
Explanation

All of the above options are correct.
Q9. What is the time complexity of the Fibonacci sequence when calculated using a recursive algorithm?
Explanation

O(2^n) Time complexity is correct.

Q10. What is the time complexity of the Tower of Hanoi problem when solved using a recursive algorithm?
Ans: B
Explanation

O(2^n) Time complexity is correct.