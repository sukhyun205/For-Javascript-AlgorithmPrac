let fs = require('fs');
let input = fs.readFileSync('./int.txt').toString().split('\r\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(){
    let testCaseNum = +input[0];
    let arr = [];

    let tmp = input[1].split(' ');
    for(let i=0; i<tmp.length; i++){
        arr.push(+tmp[i]);
    }

    arr.sort(function(a,b){     //오름차순 정렬
        return a - b; 
    });

    let answerString = '';
    answerString += `${arr[0]} ${arr[arr.length-1]}`;
    console.log(answerString);
}

solution();