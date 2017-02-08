import { expect } from 'chai';
import { Round } from '../scripts/round.js';
import { Deck } from '../scripts/deck.js';
import { Card } from '../scripts/cards.js';



describe('Testing Round', function () {

  let card1 = new Card("What is the capital of Alaska?", "Juneau")
  let card2 = new Card("Approximately how many miles are in one astronomical unit?", "93,000,000")
  let card3 = new Card("What is the worst animal to play poker with?", "A cheetah")
  let deck  = new Deck([card1, card2, card3])
  let round = new Round(deck)

  it('should instantiate an object', function () {
    expect(round).to.be.instanceof(Round)
  })

  it('Round.deck will take in an array', function () {
    expect(round.deck).to.deep.equal(
    {cards:
     [  { question: 'What is the capital of Alaska?', answer: 'Juneau' },
        { question: 'Approximately how many miles are in one astronomical unit?',
         answer: '93,000,000' }, { question: 'What is the worst animal to play poker with?',
         answer: 'A cheetah' } ] } )
  });

  it('Round will have an array of guesses', function () {
    expect(round.guesses).to.deep.equal([])
  });

  it('Round will keep track of the current card', function () {
    expect(round.currentCard()).to.deep.equal({question: "What is the capital of Alaska?", answer: "Juneau"})
  });

  it('Round will keep track of the current Guess', function () {
    expect(round.recordGuess('Juneau')).to.deep.equal({card: { question: 'What is the capital of Alaska?', answer: 'Juneau' }, response: 'Juneau', correct: true })
  });

  it('Round record wheather the guess was correct or not', function () {
    expect(round.guesses[0].feedback()).to.deep.equal('Correct!')
  });

  it('should keep a tally of how many correct guesses', function () {
    expect(round.numberCorrect).to.deep.equal(1)
  })

  it('should move on to the next card once a guess has been made on the first card', function () {
    expect(round.currentCard()).to.deep.equal({
  question: 'Approximately how many miles are in one astronomical unit?',
  answer: '93,000,000' })

  round.recordGuess('4,000')

  expect(round.currentCard()).to.deep.equal({
    question: 'What is the worst animal to play poker with?',
    answer: 'A cheetah' })
  })

  it('should not increase the numberCorrect if the response was incorrect', function () {
    expect(round.guesses[1].correct).to.deep.equal(false)
    expect(round.numberCorrect).to.deep.equal(1)
  })

  it('should give you the percentage of correct answers', function () {
    expect(round.percentCorrect()).to.deep.equal(50)
  })
})
