export class Guess {
  constructor(response, card) {
    this.card = card
    this.response = response
    this.correct = response === this.card.answer
  }

  feedback(){
    return this.correct === true ? "Correct!" : "Incorrect"
  }
}
