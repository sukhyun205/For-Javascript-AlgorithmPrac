const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
console.log(input);

input = input.split('\r\n');
console.log("input: ",input);

let testCaseNum = +input[0]; //전체 실행횟수: testCaseNum (N이랑 같은 역할)
console.log(testCaseNum,typeof(testCaseNum));

let arr = [];
for(let i = 1; i<input.length; i++){
    arr = input[i].split(' ').map((item) => (+item));
    // console.log(arr);
    console.log(arr[0]+arr[1]);
}

// console.log("arr[1]: ",arr[1]);
