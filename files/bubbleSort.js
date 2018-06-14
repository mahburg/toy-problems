function bubblesSort(arr){
    let swap = false;
    do {
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                swap = true
                let temp = arr[j+1]
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
        }
    } while (swap)
    return arr
}

let arr = [9,8,6,7,5,4,3,2,1]

console.log(bubblesSort(arr))
