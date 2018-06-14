let nums = [1,2,3,4,5,6]
let num = []
Array.prototype.square = function(){
    return this.map(c=>c*c)
}
Array.prototype.cube = function(){
    return this.map(c=>Math.pow(c, 3))
}
Array.prototype.average = function(){
    return this.reduce((s,v)=>s+v, 0)/this.length
}
Array.prototype.sum = function(){
    return this.reduce((s,v)=>s+v, 0)
}
Array.prototype.even = function(){
    return this.filter(c=>!(c%2))
}
Array.prototype.odd = function(){
    return this.filter(c=>c%2)
}

console.log(nums.square())
console.log(nums.cube())
console.log(nums.average())
console.log(num.average())
console.log(nums.even())
console.log(nums.odd())

