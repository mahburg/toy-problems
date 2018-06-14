function nextBigger(n){
    let s = n+'';
    let biggest = s.split('').map(c=>c*1).sort((a,b)=>b-a).join('')*1
    if (n === biggest){
        return -1
    }
    let pivot, pi, end;
    for (let i = s.length - 1 ; i > 0 ; i--){
        if(s[i]*1 > s[i-1]*1){
            pi = (i - 1);
            pivot = s[pi]*1
            end = s.slice(pi).split('').map(s=>s*1)
            break;
        }
    }
    let f = Math.min.apply(null, end.filter(n=>n>pivot))
    end.splice(end.indexOf(f),1)
    end.sort((a,b)=>a-b)
    end.unshift(f)
    return s.slice(0,pi) + end.join('')
}

nextBigger(10432)

for (let i = 900; i < 1000; i++){
    console.log(i, nextBigger(i))
}