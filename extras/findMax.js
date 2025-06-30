/**
 * 
 * 3. Find the largest number in an array in JavaScript.
 */

const arr= [1,8,3,4,5,6];
const findLargest = (arr) => {
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max= arr[i]
        }
    }
    return max
}

console.log(findLargest(arr))
