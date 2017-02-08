import { Guess } from '../scripts/guess.js'

export class Round {
  constructor(deck) {
    this.deck = deck
    this.guesses = []
    this.numberCorrect = 0
  }

  currentCard (){
    return this.deck.cards[0];
  }

  recordGuess(response) {
    let guess = new Guess (response, this.deck.cards[0])
    this.guesses.push(guess)
    if (guess.correct) {
      this.numberCorrect += 1
    }
    this.deck.cards.shift()
    return guess
  }

  percentCorrect(){
    return this.numberCorrect / this.guesses.length * 100
  }
}
