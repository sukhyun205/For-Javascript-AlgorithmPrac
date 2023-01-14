let input = [4,1,3,2,3,2,3,1,2];
let testCaseNum = 2;

// let arr1 = [];
// arr1.push(input[1], input[2]);
// let arr2 = [];
// arr2.push(input[3], input[4]);

// console.log(arr1);
// console.log(arr2);


for(let j=1; j<input.length; j+=2){
    let arr = [];
    // console.log(j);
    arr.push(input[j], input[j+1]);
    console.log(arr);
}