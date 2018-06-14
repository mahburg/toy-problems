toCamelCase=(s)=>s.replace(/-.|_./g,m=>m[1].toUpperCase())
const toCamelCasd=(s)=>s.replace(/[-_]./g,([,m])=>m.toUpperCase())

let w = toCamelCase('this_is_my_string')
w
let x = toCamelCase('this-is-my-string')
x
let y = toCamelCase('This-is-my-string')
y

