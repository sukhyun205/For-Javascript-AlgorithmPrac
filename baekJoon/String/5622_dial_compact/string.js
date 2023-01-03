let fs = require('fs');
// let input = fs.readFileSync('./string.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(){
    let str = input.split('');                                              //input을 split한 배열 str[]
    let phone = ['ABC','DEF','GHI','JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];    //전화번호 배열 phone[]    
    let time = 0;                                                           //필요한 시간 time
                               
    for(let i=0; i<phone.length; i++){          //phone배열 길이만큼 탐색
        let num = phone[i].split('');           //num = ['A', 'B', 'C'] = ['D', 'E', 'F'] ... ~ ['W', 'X', 'Y', 'Z']
        for(let j=0; j<num.length; j++){        //num[] 길이 ex) 3, 4만큼 탐색
            for(let k=0; k<str.length; k++){    //num = ['A', 'B', 'C']를 가지고, str = ['W', 'A'] 탐색
                if(num[j] == str[k]){           //'A' = 'A'일때
                    time += (i+3);              //'A'가 속한 phone[i]의 i+3만큼 time에 추가
                }
            }
        }
    }
    console.log(time);                          //총 걸린 시간 time출력
}
solution();