// function parseMolecule(mol){
//     let out = {};
//     let megaMatch = /{([^{}]|{})*\}\d+|\[([^{}]|{})*\]\d+|\(([^{}]|{})*\)\d+|[A-Z][a-z]{0,1}[0-9]*/g;
//     var mtch = mol.match(megaMatch);
//     // Test for enclosed molecule part with multiplier
//     if((/\(|\{|\[/).test(mol[0])){
//       let num = mol.match(/\d+$/)[0]*1;
//       let inner = mol.slice(1,(mol.length - ((num+'').length+1)));
//       let obj = parseMolecule(inner);
//       for (var p in obj){
//         obj[p] = obj[p] * num;
//       }
//       out = obj;
//     } else if (mtch.length > 1) {//Test for multiple element parts
//       // mtch.map(e=>atomsN(e));
//       for (let i = 0; i<mtch.length;i++){
//         let res = parseMolecule(mtch[i]);
//         for (let p in res){
//           if (out.hasOwnProperty(p)){
//             out[p] = out[p] + res[p];
//           } else {
//             out[p] = res[p];
//           }
//         }
//       }
//     }else {//Get element symbol and number
//       let atom = mtch[0];
//       let num = (/\d+$/).test(atom) ? atom.match(/\d+$/)[0]: 1;
//       atom = atom.match(/[A-Z][a-z]{0,1}/)[0];
//       out[atom]=num*1;
//     }
//     return out;
//   }

// function parseMolecule(mol, mult = 1) {
//     let end = /[A-Z]|\(|\{|\[/
//     let a = /[A-Z][a-z]*/
//     let ci = 0;
//     let out = {}
//     for (let i = 1; i <= mol.length; i++){
//         if (end.test(mol[i]) || mol[i] === undefined){
//             let m = mol.slice(ci,i)
//             console.log(m)
//             let atom = m.match(a)[0]
//             let num = m.match(/\d+/) && m.match(/\d+/)[0]  || 1
//             console.log(atom)
//             console.log(num)
//             if (out[atom]){
//                 out[atom]+= num
//             } else {
//                 out[atom] = num
//             }
//             ci = i
//         }
//     }
//     for (const key in out ) {
//         out[key] *= mult
//     }
//     return out
// }

function molBraceParser(str, num) {
    let braces = {'(':')','[':']','{':'}'}
    let search = false;
    let count = 0
    let b;
    let s;
    for (let i = 0; i < str.length; i++){
        if (search){
            if (str[i] === b){
                count++
            } else if (str[i] === braces[b]){
                count--
            }
            if (count === 0){
                search = false
                console.log(str.slice(i))
                let m = str.slice(i).match(/[\]|\)|\}]\d*/g)[0]
                let n = m.slice(1)*1
                console.log(m)
                console.log(n)
                let x = tallyMolString(str.slice(s, i), n)
                console.log(x)
            }

        } else {
            if (braces.hasOwnProperty(str[i])){
                b = str[i]
                search = true
                s = i + 1
                count = 1;
            }
        }
    }
}

console.log(molBraceParser('Mg3(OH)2'))


function tallyMolString(str, n = 1) {
    let out = {}
    let matches = str.match(/[A-Z][a-z]*\d*/g)
    console.log(matches)
    matches.forEach(e=>{
        let atom = e.match(/[A-Z][a-z]*/g) && e.match(/[A-Z][a-z]*/)[0] 
        let num = e.match(/\d+/) && e.match(/\d+/)[0]*1  || 1
        if (out[atom]){
            out[atom]+= num
        } else {
            out[atom] = num
        }
    })
    for (const key in out ) {
        out[key] *= n
    }
    return out
}

console.log(tallyMolString('H2SO4'))

function parseMolecule(mol, n) {
    if (!/\(|\[|\{/g.test(mol)){
        return tallyMolString(mol)
    }
    let out = {}
    let parsed = molBraceParser(mol)
    console.log(parsed)
    return out
}



var water = 'H2O';
// return {H: 2, O: 1}
var magnesiumHydroxide = 'Mg3(OH)2';
// return {Mg: 1, O: 2, H: 2}
var fremySalt = 'K4[ON(SO3)2]2';
// return {K: 4, O: 14, N: 2, S: 4}

// console.log(parseMolecule(water))
// console.log(parseMolecule(magnesiumHydroxide))
// console.log(parseMolecule(fremySalt))
