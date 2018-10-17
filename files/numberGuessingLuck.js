guess = 42; // The answer to everything, huh?
// let counter = 0;

const rand = Math.random;
const floor = Math.floor;
const max = Math.max;
const min = Math.min;

let global = this;

function setUp() {
    function Math() {
        this.random = function random() {
            let r = rand();
            guess = floor(r * 100000 + 1);
            myguess = guess;
            lastrandom = -1
            return 'r';
        };

        this.floor = floor;
        this.max = max;
        this.min = min;
        this.toString = () => '[object Math]'
    }
    global.Math = new Math();
}
setUp();


Function.prototype.toString = () => "function random() { [native code] }";

console.log(this.Math.random())
console.log(guess)
// console.log()


// const string2 = Function.prototype.toString()

// Function.prototype.toString = function (){
//   return JSON.stringify(this)
// };

// guess