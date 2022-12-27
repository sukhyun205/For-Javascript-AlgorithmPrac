//사분면고르기
//fs모듈은 런타임에러가 발생하여, readline으로 입력받아 출력

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
    .on('close', function () {
    console.log(input);

    let arrInt = [];
    for(let i=0; i<input.length; i++){
        arrInt.push(+input[i]);
    }
    console.log(arrInt);
    
    let n1 = arrInt[0];
    let n2 = arrInt[1];
    
    function solution(n1,n2){
        let answer;

        if(n1>0 && n2>0){
            answer = 1;
        }
        else if(n1<0 && n2<0){
            answer = 3;
        }
        if(n1>0 && n2<0){
            answer = 4;
        }
        if(n1<0 && n2>0){
            answer = 2;
        }
        return answer;
    }
    console.log(solution(n1,n2));   

    process.exit();
});






