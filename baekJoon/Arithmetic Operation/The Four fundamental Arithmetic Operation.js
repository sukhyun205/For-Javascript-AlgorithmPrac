//약분을 어떻게 해야할지 고민필요
function solution(d1, n1, d2, n2){
    var answer = [];

    origin1 = n1;
    origin2 = n2;

    n1 = n1*n2; //=8
    n2 = n1; //=8

    d1 = d1*origin2; //4
    d2 = d2*origin1; //6

    answer[0] = d1+d2 //10
    answer[1] = origin1*origin2 //8

    if(answer[0]%2 == 0 && answer[1]%2 == 0){
        answer[0] = answer[0]/2;
        answer[1] = answer[1]/2;
    }
    // console.log(n1,n2,d1,d2)
    return answer;
}

console.log(solution(9,2,1,3));


// function solution(num1, num2){
//     var answer = num1%num2;
//     return answer;
// }

// function solution(n1,n2){
//     var answer = 0;
//     if(n1==n2){
//         answer = 1;
//     }
//     else answer = -1;

//     return answer
// }

// function solution(n1,n2){
//     var answer = 0;
//     answer = parseInt((n1/n2)*1000);

//     return answer;
// }


