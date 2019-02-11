// arrow functions dont bind this. so that why we dont use it here 

// Prototypal Inheritance


const Game = function (word, remainingGuesses) {
    this.name = word
    this.remainingGuesses = remainingGuesses
}



const game1 = new Game('Cat', 2)
console.log(game1)

const game2 = new Game('New York', 4)
console.log(game2)
