let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString().split('\r\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = +input[0];                          //테스트 개수T

function solution(T){
    let tmp = [];                           //input을 split()하기위한 tmp[]
    for(let i=1; i<=T; i++){
        tmp = input[i].split(' ');

        let arr = [];                       //tmp[]를 숫자로 바꿔 넣을 arr[]
        for(let j=0; j<tmp.length; j++){
            arr.push(+tmp[j]);              //arr[]에 tmp[]값 할당
        }

        let H = arr[0];                     //H: 호텔 층
        let W = arr[1];                     //W: 호텔 호
        let N = arr[2];                     //N: 투숙객 넘버

        let hotel = [];                     //호텔방[]
        let roomNum = 0;                    //호텔방 넘버 = 0 초기화
        for(let x=1; x <= W; x++){          //x = 1 ~ W
            for(let y=0; y <= H-1; y++){    //y = 0 ~ H-1
                hotel[roomNum] = 100 + x + (y * 100);   //hotel[roomNum]에 호수값을 할당
                roomNum++;                  //roomNum = 0 ~ (H*W)-1
            }
        }
        console.log(hotel[N-1]);            //N번째 손님에게 hotel[N-1]호실을 할당
    }
}

solution(T);