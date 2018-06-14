
let pattern = {2:[6,2,4,8],3:[3, 9, 27,81, 43, 29, 87, 61, 83, 49, 47, 41, 23, 69, 07, 21, 63, 89, 67, 01],4:[6,4],7:[7, 49, 43, 01, 07, 49, 43, 01],8:[8, 64, 12, 96, 68, 44, 52, 16, 28, 24, 92, 36, 88, 04, 32, 56, 48, 84, 72, 76],9:[1,9]}

function l2d(a, b) {
    if (a === 0 && b ===0){
        return 1
    } else {
        // console.log( pattern[a].length - 1 )
        // console.log(b % ( pattern[a].length - 1))
        // console.log(pattern[a])
        // console.log(b % ( pattern[a].length) )
        // console.log(pattern[a][b %( pattern[a].length) -1])
        return pattern[a][b %( pattern[a].length)]
    }
}

function lastDigit(arr){
    if(arr.length===0 || (arr.length === 2 && arr[0] === 0 && arr[i] ===0 )){
        return 1
    } else if( [0,1,5,6].includes(arr[0]%10) ){
        return (arr[0] % 10)
    } else {
        let expo = arr[arr.length - 1]
        console.log(expo)
        let a = arr.slice(0,-1)
        console.log(a)
        while (a.length){
            console.log(expo)
            let n = a.pop()
            console.log(n)
            expo = l2d(n , expo)
            console.log(expo)
        }
        return expo
    }
}

console.log(l2d(3,16))
console.log(l2d(2,63))

let arr = [3, 4, 2]
console.log(arr.slice(0, -1))
console.log(lastDigit([3, 4, 2]))
