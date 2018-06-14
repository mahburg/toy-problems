function birthdayCakeCandles(arr) {
    let big = arr[0];
    let count = 1;
    for (let i = 1; i < arr.length ; i++){
        if (arr[i] === big){
            count++;
        } else if( arr[i] > big){
            big = arr[i];
            count = 1;
        }
    }
    return count
}

console.log(birthdayCakeCandles([3,2,1,4,3,6,3,4,6,5]))