const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString(); //양끝 줄바꿈 문자 없애기 .trim()

console.log(input);

input = input.split('\r\n');                                        //윈도우 환경에서는 \r이 출력되는데 -> \r\n으로 \r, 줄바꿈공백 제거

console.log(input);

const testCaseNum = +input[0];                                     //+를 붙여주면 타입을 Number로 인식

console.log(testCaseNum, typeof(testCaseNum));

for(let i = 1; i<=testCaseNum; i++){ //i = 1~5
    const arr = input[i].split(' ').map((item) => (Number(item))); 
    //아 map()함수를 통해서 기존 arr[i]값들을 Number타입으로 변환하면서 변수를 새로 생성하지 않고도 기존 변수arr에 arr[i]값들을 할당할 수 가 있구나    
    //공백을 기준으로 1 1 -> [1, 1]로 배열arr에 할당

    /* 와 이과정이 위 .map((item) => Number(item))으로 줄일 수 있네. 
    let newArr = []; //오호 이렇게 배열로 선언을 하네
    for(let i=0; i<arr.length; i++){
        newArr.push(+arr[i]); //오호 .push를 통해서 newArr[i]에 arr[i]를 넣을 수가 있네
    }
    */

    console.log(arr);
    console.log(newArr);                                             //노란색으로 출력되어야 number타입으로 출력된거!
    break;
}