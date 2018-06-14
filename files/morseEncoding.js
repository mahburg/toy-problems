const dec2twos = n =>{
  if (n < 0){
    let a = '1'+(~n).toString(2).split('').map(c=>c==='1'?'0':'1').join('');
    return '1'.repeat(32 - a.length) + a
  }else{
    let a = (n).toString(2)
    return '0'.repeat(32 - a.length) + a
  }
}
var Morse = {};
Morse.alpha = {
  'A': '10111', 'B': '111010101', 'C': '11101011101', 'D': '1110101', 'E': '1', 'F': '101011101', 'G': '111011101', 'H': '1010101', 'I': '101', 'J': '1011101110111', 'K': '111010111', 'L': '101110101', 'M': '1110111', 'N': '11101', 'O': '11101110111', 'P': '10111011101', 'Q': '1110111010111', 'R': '1011101', 'S': '10101', 'T': '111', 'U': '1010111', 'V': '101010111', 'W': '101110111', 'X': '11101010111', 'Y': '1110101110111', 'Z': '11101110101', '0': '1110111011101110111', '1': '10111011101110111', '2': '101011101110111', '3': '1010101110111', '4': '10101010111', '5': '101010101', '6': '11101010101', '7': '1110111010101', '8': '111011101110101', '9': '11101110111011101', '.': '10111010111010111', ',': '1110111010101110111', '?': '101011101110101', "'": '1011101110111011101', '!': '1110101110101110111', '/': '1110101011101', '(': '111010111011101', ')': '1110101110111010111', '&': '10111010101', ':': '11101110111010101', ';': '11101011101011101', '=': '1110101010111', '+': '1011101011101', '-': '111010101010111', '_': '10101110111010111', '"': '101110101011101', '$': '10101011101010111', '@': '10111011101011101', ' ': '0'
};
Morse.binary = {}
for (let key in Morse.alpha){
  let a = Morse.alpha
  Morse.binary[a[key]] = key
}

Morse.encode = function(message){
  let msg = message.toUpperCase().split(' ')
  let bin = msg.map(word=>word.split('').map(char=>Morse.alpha[char]).map(n=>n==='0'?'0000000':n).join('000')).join('0000000')
  let b32 = []
  for (let i = 0; i < bin.length ; i += 32){
    b32.push(bin.slice(i, i+32))
  }
  return b32.map(s=>s.length<32?(s+'0'.repeat(32-s.length)):s).map(n=>~~parseInt(n,2))
  
};

Morse.decode = function(arr){
  let bin = arr.map(n=>dec2twos(n)).join('').split('').reverse()
  while(bin[0] === '0'){
    bin = bin.slice(1)
  }
  bin = bin.reverse().join('')
  let words = bin.split('0000000')
  return words.map(w=>w.split('000').map(b=>Morse.binary[b]).join('')).join(' ')
};

let test = 'MMM'
let en = Morse.encode(test);
console.log(en)
let de = Morse.decode(en)
console.log(de)

console.log(Morse.decode([3996880608]))
console.log(Morse.decode([-298086688]))
