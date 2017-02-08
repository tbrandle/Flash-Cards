import { expect } from 'chai';
import { Card } from '../scripts/cards.js'
import { Guess } from '../scripts/guess.js'

describe('Testing Guess', function () {
  let card = new Card ("What is the capital of Alaska?", "Juneau")
  let guess = new Guess("Juneau", card)

  it('should instantiate an object', function () {
    expect(guess).to.be.instanceof(Guess)
  })

  it('Guess take in an argument for card and save that card to the guess', function () {
    expect(guess.card).to.deep.equal({ answer: "Juneau", question:"What is the capital of Alaska?"})
  });

  it('Guess takes in an argument for response that compares the value to card answer. If they match, guess.correct will return true', function () {
    expect(guess.response).to.equal("Juneau")
    expect(guess.correct).to.deep.equal(true)
  });

  it('If response is correct, this.feedback() will return \'Correct!\'', function () {
    expect(guess.feedback()).to.deep.equal("Correct!")
  });

  it('If response is incorrect, this.correct will return false', function () {
    let card = new Card ("What is the capital of Alaska?", "Juneau")
    let guess = new Guess("Alabama", card)

    expect(guess.response).to.equal("Alabama")
    expect(guess.correct).to.deep.equal(false)
  });

  it('If response is incorrect, this.feedback() will return \'Incorrect\'', function () {
    let card = new Card ("What is the capital of Alaska?", "Juneau")
    let guess = new Guess("Alabama", card)

    expect(guess.response).to.equal("Alabama")
    expect(guess.correct).to.deep.equal(false)
    expect(guess.feedback()).to.deep.equal("Incorrect")
  });
})
