let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let need = [1,1,2,2,2,8];
// console.log("need: ",need)

let arr = [];
for(let i=0; i<input.length; i++){
    arr.push(+input[i]);
}
// console.log("arr: ",arr);

let answer = [];
for(let i=0; i<arr.length; i++){
    answer[i] = need[i]-arr[i];
    console.log(answer[i]);
}