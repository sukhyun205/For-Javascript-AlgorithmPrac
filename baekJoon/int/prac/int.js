let fs = require('fs');
let input = fs.readFileSync('./int.txt').toString().split('\r\n');

console.log(input);

let time = +input[1];
console.log(time);

let arrInt = [];
let temp = [];
temp = input[0].split(' ');
for(let i=0; i<temp.length; i++){
    arrInt.push(+temp[i]);
}
console.log(arrInt);

let hour = arrInt[0];
let min = arrInt[1];

console.log(hour,min);

// function solution(h, m){

//     if(m>=45){
//         m -= 45;
//     }
//     else if(m<45){
//         if(h == 0){
//             h = 23;
//             m += 15;
//         }
//         else{
//             h -= 1;
//             m += 15;
//         }
//     }


//     console.log(h, m);
// }

// solution(hour,min);