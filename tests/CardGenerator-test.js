import { expect } from 'chai';
import { CardGenerator } from '../scripts/CardGenerator.js';

describe('Testing CardGenerator', function () {

  const cardFile = "cards.txt"
  let cardsGenerator = new CardGenerator(cardFile)

  it('should instantiate an object', function () {
    expect(cardsGenerator).to.be.instanceof(CardGenerator)
  })

  it('should breakout the txt file and log the question and answer of the card into an array', function () {
    expect(cardsGenerator.cards).to.deep.equal([ { question: "What is 5 + 5?", answer: "10"},
      { question: "What is yung-jhun's favorite ice cream flavor?", answer: "vanilla"},
      { question: "What is alter-nate's middle name?", answer: "nobody knows"},
      { question: "What cardboard cutout lives at Turing?", answer: "Pat Whey"}])
  })
})
