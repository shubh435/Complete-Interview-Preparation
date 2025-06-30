/**
 * 
 * 2. Write a Program to check whether a string is a palindrome string.
 */


const str = 'sts';
const reverseStr = (str) => {
    let arr = str.split("");
    let start =0;
    let end =arr.length-1;
    while(start<=end){
        let temp = arr[start];
         arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    
    return arr.join("");
}

const checkPalindrome = (str) => {
    return str === reverseStr(str);
}

console.log(checkPalindrome(str))
