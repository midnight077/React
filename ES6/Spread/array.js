//  ... => spread operator
let arr = [1,2,3,4,5,6];
// console.log(...arr);

// insert an ele at index 
let ele = 10;
let idx=3;

// without soread operator
// let narr = [];
// for(let i =0 ; i<idx ; i++){
//     narr.push(arr[i])
// }
// narr.push(ele);
// for(let i =idx ; i<arr.length ; i++){
//     narr.push(arr[i])
// }
// console.log(narr);


// with spread operator
let narr = [...arr.slice(0,idx),ele,...arr.slice(idx)];
console.log(narr);