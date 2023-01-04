let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split(' ').map((item)=>(+item));
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map((item) => (+item));

let a = input[0];
let b = input[1];
let c = input[2];

// console.log(a,b,c);

function solution(a,b,c){
    let reward = 0;

    if(a==b && b==c){
        reward = 10000 + (a*1000);
    }
    if(a!=b || b!=c || a!=c){
        if(a==b || b==c){
            reward = 1000 + (b*100);
        }
        else if(a == c){
            reward = 1000 + (a*100);
        }
    }
    if(a!=b && b!=c && a!=c){
        let max = a;
        let arr = [a,b,c];
        for(let i=0; i<arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }
        reward = max * 100;
    }
    return reward;
}

console.log(solution(a,b,c));