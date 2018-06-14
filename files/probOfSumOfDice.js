function combos(tot, dice) {
    if(dice === 1){
        return tot > 6 ? 0 : 1
    }else{
        let arr = []
        for (let i = 1; i < 7; i++){
            if(i < tot){
                arr.push(combos(tot - i, dice - 1))
            }
        }
        console.log( arr);
        return arr.reduce((s,v)=>s+v,0)
    }
}
function rolldiceSumProb(tot, dice) {
    return combos(tot, dice)/Math.pow(6, dice)
}

let x = combos(3,2)
x