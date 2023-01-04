//self number

let n = 10000; //10000이하로 셀프넘버 출력

function solution(n){
    let check = [];             //중복체크를 위한 check[]
    for(let i=1; i<=n+1; i++){
        check[i] = false;
    }

    let d = 0;                  
    for(let i=1; i<=n; i++){                    //입력값 i = 1~10000
        if(i<100){
            d = i + parseInt(i/10) + (i%10);    //10의 자리
        }
        else if(i>=100 && i<1000){              //100의 자리
            d = i + parseInt(i/100) + (parseInt(i/10))%10 + (i%10);
        }
        else if(i>=1000 && i<10000){            //1000의 자리
            d = i + parseInt(i/1000) + (parseInt(i/100)%10) + (parseInt(i/10)%10) + (i%10);
        }
        check[d] = true;                        //결과값 d자리의 값을 true로 할당 
    }

    for(let i=0; i<check.length; i++){
        if(check[i] == false){                  //생성자를 가지지 않는 셀프넘버 출력
            console.log(i);
        }
    }
}

solution(n);