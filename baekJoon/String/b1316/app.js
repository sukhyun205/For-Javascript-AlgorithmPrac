let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]); //아 횟수n은 input[0]에 넣었으니까
let answerStr = '';

for(let i = 1; i <= count; i++){  //i[0]은 이미 차있으니까 i[1]부터 시작
    let num = input[i].split(" "); 
    answerStr += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answerStr);
