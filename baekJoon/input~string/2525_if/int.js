let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split('\r\n');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arrInt = [];
let temp = [];
temp = input[0].split(' ');
for(let i=0; i<temp.length; i++){
    arrInt.push(+temp[i]);
}

let hour = arrInt[0];
let min = arrInt[1];
let time = +input[1];

function solution(hour,min,time){
    if(min + time >= 60){
        hour += parseInt((min+time)/60);
        min = (min+time) % 60;
        if(hour >= 24){
            hour -= 24;
        }
    }
    else{
        min += time;
    }
    console.log(hour,min);
}

solution(hour,min,time);