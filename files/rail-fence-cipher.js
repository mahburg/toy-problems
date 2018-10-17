function encodeRailFenceCipher(str, n) {
    let main = []
    for (let k = 0; k < n; k++){
        main.push([])
    }
    let cycle = 2 * (n - 1);
    for (let i = 0; i < str.length; i++){
        let mod = i % cycle;
        let x = mod > (n - 1) ? mod - (2*(mod-(n-1))) : mod;
        for (let j = 0; j < n; j++){
            if (j === x){
                main[x].push(str[i])
            } else {
                main[x].push('.')
            }
        }

    }
    return main.map(c=>c.filter(c=>c!=='.').join('')).join('')
}

// 1st number sum at given length =ROUNDDOWN(len/(cycle)/2)+1
// Mid number sum at given length =ROUNDDOWN((len-1)/(cycle)*2)+1
// End number sum at given length =ROUNDDOWN(B79/2)

function decodeRailFenceCipher(str, n) {
    // code
    console.log(str)
    console.log(n)

    let len = str.length;
    console.log(len)

    let cycle = 2 * (n - 1);
    console.log(cycle)
    let sums = {}
    let first = Math.ceil(len/cycle)
    let mid = ~~((len-1)/(cycle)*2)+1
    let last = ~~(mid/2)
    console.log(first)
    console.log(mid)
    console.log(last)
    sums[0] = first
    sums[len-1] = last


    let mod = len % (cycle + 1);
    let mod2 = len % n;
    console.log(mod)
    console.log(mod2)
    console.log(mod > (n - 1))
    let midArrIndex = mod > (n - 1) ? n - ( mod2) - 1 : mod - 1;
    console.log(midArrIndex);
    // TODO:
    // determine middle array based on len done
    // fill in with mid until peak
    // fill in rest with mid - 1
    let flag = true;
    for (let i =  midArrIndex; i >= 0 ; i--){
        console.log(i)
        console.log(i % (n-1))
        if (i % (n-1)){
            console.log('d')
            sums[i] = mid;
        } else {
            break;
        }
    }
    for (let i = 0; i < n; i++){
        if (!sums[i]){
            sums[i] = mid - 1
        }
    }
    console.log(sums)
    return sums
}

let n = 7
let out = encodeRailFenceCipher('012345678', n)
// let out = encodeRailFenceCipher('0123456789abcdefghij', n)
// let out = encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', n)
console.log(out)
// WECRLTEERDSOEEFEAOCAIVDEN
let out1  = encodeRailFenceCipher("Hello, World!", n)
console.log(out1)

decodeRailFenceCipher(out, n)