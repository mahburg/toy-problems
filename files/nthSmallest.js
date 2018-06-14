//to slow
function nthSmallestSlow(arr, n) {
    let uniq = [];
    for (let i = 0; i < arr.length; i++){
        if (!uniq.includes(arr[i])){
            uniq.push(arr[i])
        }
    }
    uniq.sort((a,b)=>a-b)
    console.log('uniq :', uniq);
    return uniq[n - 1]
}

function nthSmallestStillSlow(arr, n) {
    if (arr.length < n){
        return null
    }
    let sorted = arr.slice().sort((a,b)=>a-b);
    let index = 0
    for (let i = 0; i < sorted.length ; i++){
        if (sorted[i] !== sorted[i-1]){
            index++;
        }
        if (index === n){
            return sorted[i]
        }
    }
    return null
}
function nthSmallestTooDeepCallStack(arr, n) {
    if (arr.length < n){
        return null
    }
    for (let i = 0; i < n  ; i++){
        if (arr.length === 0){
            return null
        }
        let f = Math.min.apply(null, arr)
        if (i+1 === n){
            return f
        } else{
            arr=arr.filter(c=>c!==f)
        }
    }
    return null
}

function nthSmallest(arr, n) {
    let smaller = []
    let small = arr[0]

    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== small && !smaller.includes(arr[i])){
            console.log(small)
            console.log(smaller)
            console.log(arr[i])
            if (smaller.length < n - 1){
                if (arr[i]< small){
                    smaller.push(arr[i])
                } else {
                    smaller.push(small)
                    small = arr[i]
                }
            } else {
                if (arr[i] < small){
                    let big = 0;
                    let flag = false
                    for (let j = 0; j < smaller.length; j++){
                        console.log(arr[i])
                        console.log(smaller[j])
                        if (smaller[j] < smaller[big]){
                            big = j
                        }
                        if (arr[i] < smaller[j]){
                            flag = true
                        }
                    }
                    console.log(flag)
                    console.log(small)
                    if (flag){
                        small = smaller[big]
                        smaller.push(arr[i])
                    }
                    console.log(small)
                } 
            }
        }
    }

    console.log(smaller)
    console.log(small)
    return small
}

// let a = [4,2,3,1,0];
let a = [14, 12, 46, 11, 34, 334];
// let a = [455555, 2222222, 3333333, 9879799, 79977979, 79977979, 79977979, 79977979, 79977979, 79977979, 79977979, 79977979];

let out = nthSmallest(a, 3)
console.log(out)