let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split('\r\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//input[0]의 testNumCase 활용x

function solution(){
    for(let i=1; i<input.length; i+=2){                 //각각 testCase의 거주민수를 구하기 위해, for문을 통해 [1,3] [2,3]형태로 분리 
        let arr = [];                                   
        arr.push(+input[i], +input[i+1]);               //arr = [1,3], [2,3]

        let a = arr[0];                                 //a층 = 각각 1, 2
        let b = arr[1];                                 //b호 = 각각 3, 3
        let apart = [];                                 //각각 호수를 가진 아파트를 생성하기 위한 배열 apart[] 생성
        let j = 0;                                      //j = 0 ~ (a+1) * b //a초기값이 0이므로 a+1

        //a층 * b호 이중for문으로 apart[]에 호수 할당
        for(let k=0; k<=a; k++){                        //k = 0 ~ 1, 0 ~ 2 
            for(let n=1; n<=b; n++){                    //n = 1 ~ 3, 1 ~ 3
                if(j >= 0 && j <= b-1){                 //j = 0 ~ b-1일때,
                    apart[j] = k + n;                   //0층 b호실은 0+1=1, 0+2=2, 0+3=3 ...
                }
                else if(j%b == 0){                      //각 층의 1호실일때,
                    apart[j] = 1;                       //각 층 1호실 = 1
                }
                else{
                    apart[j] = apart[j-1] + apart[j-b]; //나머지 호실 =  apart[j-1]인원수 + apart[j]의 바로밑층 인원수
                }
                j++;                                    //j++;
            }
        }
        let numOfInhabitants = apart[((a+1)*b)-1];      //a,b에 해당하는 주민수 numOfInhabitants
        console.log(numOfInhabitants);                  //출력
    }
}

solution();