
/** 
2. Group an array of objects by the 'city' property.
Input: 
[
 { name: 'Alice', city: 'New York' },
 { name: 'Bob', city: 'London' },
 { name: 'Charlie', city: 'New York' }
]

Output: {
 'New York': [{ name: 'Alice', city: 'New York' }, { name: 'Charlie', city: 'New York' }],
 'London': [{ name: 'Bob', city: 'London' }]
}

*/
const arr = [
 { name: 'Alice', city: 'New York' },
 { name: 'Bob', city: 'London' },
 { name: 'Charlie', city: 'New York' }
]


const grouparr = (arr)=> {
    let hashMap = {}
    for(let i=0;i<arr.length;i++){
        hashMap[arr[i].city] = [...(hashMap[arr[i].city] || []),arr[i]]
    }
    return hashMap;
}

console.log(grouparr(arr))
