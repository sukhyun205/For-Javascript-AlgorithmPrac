let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();

let n = +input;

let star = '';

for(let i=0; i<n; i++){
    for(let j=i; j<n-1; j++){
        star += ' ';
    }
    for(let k=0; k<=i; k++){
        star += '*';
    }
    star += '\n';
}

console.log(star);