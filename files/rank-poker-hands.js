const Result = { "win": 1, "loss": 2, "tie": 3 };

const hands = ['high card','pair','two pair','three of a kind','straight','flush','full house','four of a kind','straight flush','royal flush'];

const names = {14:'Ace', 13:'King', 12:'Queen', 11:'Jack', 10:'Ten', 9:'Nine', 8:'Eight', 7:'Seven', 6:'Six', 5:'Five', 4:'Four', 3:'Three', 2:'Two', 1:'Ace',}

const values = {K:13,Q:12,J:11,T:10,A:14, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9};

const valCB = v => values[v];

const sequentialArr = (arr) => {
    for (let i = 1; i < arr.length; i++){
        if (arr[i] - 1 !== arr[i-1]) {
            return false;
        }
    }
    return true;
}

class PokerHand {
    constructor(handStr){
        this.hand = handStr.split(' ');
        this.score = []
        this.flush = true;
        for (let i = 1; i < this.hand.length; i++){
            if (this.hand[i][1] !== this.hand[0][1]) {
                this.flush = false;
                break;
            }
        }
        this.counts = this.hand.reduce((n, c) => {
            if (n.hasOwnProperty(c[0])){
                n[c[0]]++;
            } else {
                n[c[0]] = 1
            }
            return n
        } ,{})
        this.nums = {4:[], 3:[], 2:[], 1:[]};
        for (let card in this.counts){
            this.nums[this.counts[card]].push(card)
        }

        this.cardVals = this.hand.map(c => values[c[0]] || c[0]/1).sort((a,b)=> a-b);
        this.revVals = this.cardVals.slice().reverse();
        this.aceLow = this.cardVals.map(c => c === 14 ? 1 : c).sort((a,b)=> a-b);
        this.hasAceKing = this.cardVals.includes(14) && this.cardVals.includes(13);
        this.highCard = Math.max(null, ...this.cardVals)
        this.straight = sequentialArr(this.cardVals) || sequentialArr(this.aceLow);

        switch (true) {
            case this.straight && this.flush && this.hasAceKing:
                this.rank = 'royal flush'
                break;
            case this.straight && this.flush:
                this.rank = 'straight flush'
                this.score.push(this.highCard);
                break;
            case this.nums[4].length === 1:
                this.rank = 'four of a kind'
                this.score.push(values[this.nums[4][0]], values[this.nums[1][0]])
                break;
            case this.nums[3].length === 1 && this.nums[2].length === 1:
                this.rank = 'full house'
                this.score.push(values[this.nums[3][0]], values[this.nums[2][0]])
                break;
            case this.flush:
                this.rank = 'flush'
                this.score = this.revVals;
                break;
                case this.straight:
                this.rank = 'straight'
                this.score = this.revVals;
                break;
            case this.nums[3].length === 1:
                this.rank = 'three of a kind'
                this.score = [values[this.nums[3][0]], ...this.revVals.filter(c => c !== values[this.nums[3][0]])]
                break;
            case this.nums[2].length === 2:
                this.rank = 'two pair'
                this.score = [...this.nums[2].map(valCB).sort((a,b)=>b-a), ...this.revVals.filter(c=>!this.nums[2].map(valCB).includes(c))]
                break;
            case this.nums[2].length === 1:
                this.rank = 'pair'
                this.score = [...this.nums[2].map(valCB).sort((a,b)=>b-a), ...this.revVals.filter(c=>!this.nums[2].map(valCB).includes(c))]
                break;
            default:
                this.rank = 'high card'
                this.score = this.revVals;
                break;
        }
        this.rankNum = hands.indexOf(this.rank);
    }
    compareWith(hand){
        let check;
        if (typeof hand === 'string') {
            check = new PokerHand(hand);
        } else {
            check = hand;
        }
        if (this.rank === check.rank) {
            for (let i = 0; i < this.score.length; i++){
                if (this.score[i] < check.score[i]) {
                    return Result.loss;
                } else if (this.score[i] > check.score[i]){
                    return Result.win;
                }
            }
            return Result.tie;
        } else {
            if (this.rankNum < check.rankNum){
                return Result.loss;
            } else {
                return Result.win;
            }
        }
    }
}

// PokerHand.prototype.compareWith = function compareWith(hand) {
//     const check = new PokerHand(hand);
//     if (this.rank === check.rank) {
//         for (let i = 0; i < this.score.length; i++){
//             if (this.score[i] < check.score[i]) {
//                 return Result.loss;
//             } else if (this.score[i] > check.score[i]){
//                 return Result.win;
//             }
//         }
//         return Result.tie;
//     } else {
//         if (this.rankNum < check.rankNum){
//             return Result.loss;
//         } else {
//             return Result.win;
//         }
//     }
// }


// let myHand = new PokerHand('KS 2H AC JD 2D') // Ace High
// let myHand = new PokerHand('KS 2H 5C JD 2D') // Pair
// let myHand = new PokerHand('KS 2H JC JD 2D') // Two Pair
let myHand = new PokerHand('JS JH KD JD 6C') // Three of a kind
// let myHand = new PokerHand('AC 2C 3C 4C 5H') // Straight ace low
// let myHand = new PokerHand('TC 7C 3C KC 2C') // Flush
// let myHand = new PokerHand('KS KH KD JD JC') // Full House
// let myHand = new PokerHand('TD TC TH TS 8S') // Four of a kind
// let myHand = new PokerHand('9C TC JC 7C 8C') // Straight flush
// let myHand = new PokerHand('TC JC QC KC AC') // Royal flush

console.log(myHand.counts)
console.log(myHand.nums)
console.log(myHand.rank)
console.log(myHand.rankNum)
console.log(myHand.score)

console.log(myHand.compareWith('JS JH KD JD 6C'))
console.log(typeof myHand.compareWith)
