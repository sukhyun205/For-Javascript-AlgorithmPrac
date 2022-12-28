let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split('\r\n');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// console.log(input);

let testCaseNum = +input[0];

function solution(n){
    for(let i=1; i<=n; i++){
        let arr = [];
        let tmp = [];
        tmp = input[i].split(' ');
    
        for(let i=0; i<tmp.length; i++){
            arr.push(+tmp[i]);
        }
        console.log(arr[0] + arr[1]);
    }
}

solution(testCaseNum);