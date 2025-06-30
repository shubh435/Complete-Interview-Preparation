/**
 * 
 * 4. How Remove the first element from an array in JavaScript?
 */

const arr= [1,8,3,4,5,6];
const removeFirst = (arr) => {
    return arr.filter((ele,index)=>index!=0)
}

const removeFirstS = (arr) => {
    return arr.slice(1)
}
console.log(removeFirst(arr))
