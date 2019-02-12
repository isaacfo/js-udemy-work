// arrow functions dont bind this. so that why we dont use it here 

// Prototypal Inheritance


const Game = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c']
}

Game.prototype.getPuzzle = function () {
    let puzzle = ''
    
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

const game1 = new Game('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new Game('New York', 4)
console.log(game2.getPuzzle())
