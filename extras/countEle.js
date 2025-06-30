
/** 
3. Count how many times each element appears in an array.
Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
Output: { apple: 3, banana: 2, orange: 1 }
*/
const arr =['apple', 'banana', 'apple', 'orange', 'banana', 'apple']


const countEle = (arr)=> {
    let hashMap = {}
    for(let i=0;i<arr.length;i++){
        hashMap[arr[i]] = (hashMap[arr[i]] || 0) + 1
    }
    return hashMap;
}
console.log(countEle(arr))





