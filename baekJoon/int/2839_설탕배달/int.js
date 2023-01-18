//백준2839 설탕배달
//5와 3을 최소 횟수로 합하여 N을 만드는 문제
//포인트: 주머니개수 cnt를 최소화하기 위해, 5의 배수가 나올때까지, 5가 아닌 3을 계속 빼는게 포인트. 

let fs = require('fs');
// let input = fs.readFileSync('./int.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString().trim();

let N = +input;                 //테스트 넘버 N

function solution(N){           
    let cnt = 0;                //3kg, 5kg 설탕 주머니의 총 개수 cnt
    while(true){
        if(N % 5 == 0){         //5kg으로 나누어지는 것이 최소주머니 개수이므로, 먼저 5의 나머지가 0인지 확인한다
            cnt = cnt + (N/5);  //5로 나누어진다면, cnt에 N/5개수만큼 추가한다.
            break;              //5로 다 나누어진다면, N은 0이므로, 종료
        }
        N -= 3;                 //5로 나누어지지 않는다면, N = N - 3
        if(N < 0){              //N을 계속해서 -3하다가, N < 0이 되면 3 또는 5로 나누어지지 않는것임으로, -1출력
            cnt = -1;
            break;
        }
        cnt++;                  //N -= 3 할때마다, cnt++
    }
    console.log(cnt);           //총 설탕주머니 개수 cnt 출력
}

solution(N);