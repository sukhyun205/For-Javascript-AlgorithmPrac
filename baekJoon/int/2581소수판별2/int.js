//백준 2581 소수
//2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 2

let fs = require('fs');
let input = fs.readFileSync('./int.txt').toString().split('\r\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let M = +input[0];                          //M = 60
let N = +input[1];                          //N = 100

function solution(M,N){
    let num = [];                           //M ~ N 사이 숫자를 넣기 위한 num[]
    let size = N - M;                       //num의 크기 size
    for(let i=0; i<=size; i++){             //num = [60, 61, 62 ...]
        num[i] = M;
        M++;
    }

    let arr = [];                           //소수만 집어넣을 arr[]
    //2중for문을 통해 소수판별
    for(let i=num[0]; i<=num[size]; i++){   //i = 60 ~ 100
        let boolean = true;                 //소수판별을 위한 boolean
        for(let j=2; j<=i-1; j++){          //j = 2 ~ i-1
            if(i % j == 0){                 //i가 소수가 아니라면 break;
                boolean = false;            
                break;                      
            }
        }
        if(boolean == true){                //i가 소수라면 arr[]에 추가
            arr.push(i);
        }
    }

    if(arr[0] == 1){                        //1은 소수가 아니므로, 제거
        arr.splice(0,1);
    }

    if(arr.length === 0){                   //arr[]에 소수가 없다면 -1출력
        console.log(-1);
    }
    else{                                   //그 이외에는 sum, 최소값 arr[0] 출력
        let sum = 0;
        for(let i=0; i<arr.length; i++){
            sum += arr[i];
        }
        console.log(sum);                   
        console.log(arr[0]);
    }
}

solution(M,N);