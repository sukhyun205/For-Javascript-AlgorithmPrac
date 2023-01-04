let fs = require('fs');
// let input = fs.readFileSync('./string.txt').toString().split('\r\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//입력개수
let n = +input[0];  

function solution(){
  for(let i=1; i<input.length; i++){
    let tmp = [];
    let str = [];
    tmp = input[i].split('');         //입력값 정제

    for(let i=0; i<tmp.length; i++){  
      str.push(tmp[i]);
    }

    let score = 0;                     //누적 점수
    let cnt = 0;                       //'O'점수 카운트
    for(let i=0; i<str.length; i++){
      if(str[i] == 'O'){                //'O'라면 cnt++;
        cnt ++;
        score += cnt;
      }
      else{                             //'X'라면 cnt초기화;
        cnt = 0;
      }
    }
    console.log(score);
  }

}

solution();