/**
 * 
 *  Write a Program to print Fibonacci sequence up to n terms?
 */

const n= 7;
const f = (n) => {
  let a=0;let b=1,res=0;
  for(let i=1;i<=n;i++){
      res = a +b ;
      a=b;
      b=res
  }
  return res;
}

console.log(f(n))
