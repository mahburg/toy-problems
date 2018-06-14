function braceParser(str) {
    let out = []
    if (!/\(|\[|\{/.test(str)){
        out.push(str)
        return out
    }
    let braces = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let b, bs, s = 0, e;
    let count = 0
    let searching = false
    for (let i = 0; i < str.length; i++){
        if (searching){
            if (str[i] === b){
                count ++
            } else if(str[i]=== braces[b]){
                count--
            }
            if (count === 0){
                searching = false
                console.log(str.slice(bs,i))
                out.push( braceParser(str.slice(bs,i)) )
                e = i + 1
            }
        } else{
            if ( braces.hasOwnProperty(str[i]) ){
                b = str[i]
                bs = i + 1
                count = 1;
                searching = true
                out.push(str.slice(s, i))
            }
        }
    }
    str.slice(e) && out.push(str.slice(e))
    return out
}