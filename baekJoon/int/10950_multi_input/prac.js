let input = ['1 2', '3 4'];


for(let i=0; i<input.length; i++){
    let tmp = [];
    let arr = [];

    tmp = input[i].split(' ');

    for(let i=0; i<tmp.length; i++){
        arr.push(+tmp[i]);
    }

    console.log(arr[0]+arr[1])
}



