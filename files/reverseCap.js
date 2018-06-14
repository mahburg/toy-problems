const fc1=str=>str.split('').map(m=>/[A-Z]/.test(m)?m.toLowerCase():m.toUpperCase()).join('')

fc1('aBcLKDSJFLKD1234e(*&^%$#')

function flipCasing (str){
  let arr = str.split('')
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] === arr[i].toUpperCase()){
      arr[i] = arr[i].toLowerCase()
    } else {
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join('')
}

flipCasing('ABC123abc')

const fc2=str=>str.replace(/./g,m=>/[A-Z]/.test(m)?m.toLowerCase():m.toUpperCase())

let x  = fc2('AbCd584 555hjytcd:LKJ')

x