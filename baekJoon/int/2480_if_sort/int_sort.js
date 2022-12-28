let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split(' ').map((item)=>(+item));
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map((item) => (+item));

//sort(); 배열 기본 오름차순정렬함수 활용
let arr = [input[0],input[1],input[2]];
arr.sort();         
let a = arr[0];
let b = arr[1];
let c = arr[2];

function solution(a,b,c){
    let reward = 0;

    if(a==b && b==c){
        reward = 10000 + (a*1000);
        return reward;
    }
    if(a==b || b==c){
        reward = 1000 + (b*100);
    }
    else{
        reward = c*100;
    }

    return reward;
}

console.log(solution(a,b,c));