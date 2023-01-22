//2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제1
//푸는방법이 백준문제 설명에 다 나와있었다..

let fs = require('fs');
let input = fs.readFileSync('./int.txt').toString().split('\r\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = 0;                            //소수의 개수 cnt
function primeNumber(arrI){             //arrI(=arr[i])를 매개변수로 받는 primeNumber()함수
    if(arrI == 1){                      //1일경우, return 종료
        return;
    }
    for(let j=2; j<=arrI-1; j++){       //2 ~ 자기자신-1 범위까지 for문을 통해 나누어서 소수 판별
        if(arrI % j == 0){              //1과 자기자신 외의 숫자로 나누어 진다면, 그 수는 소수가 아니다.
            return;
        }
    }
    cnt++;                              //위 조건으로 return되지않는다면, 그 수는 소수이므로, cnt+1
}

function solution(){
    let tmp = input[1].split(' ');
    let arr = [];
    for(let i=0; i<tmp.length; i++){
        arr.push(+tmp[i]);
    }

    for(let i=0; i<arr.length; i++){
        primeNumber(arr[i]);            //주어진 arr[]의 length만큼 판별함수 primNumber()실행
    }
    console.log(cnt);                   //소수 개수 cnt 출력
}

solution();