import { expect } from 'chai';
import { Deck } from '../scripts/deck.js';
import { Card } from '../scripts/cards.js'


describe('Testing Deck', function () {

  let card1 = new Card("What is the capital of Alaska?", "Juneau")
  let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
  let card3 = new Card("Describe in cardFile the exact direction that is 697.5° clockwise from due north?", "North north west")
  let deck = new Deck([card1, card2, card3])

  it('should instantiate an object', function () {
    expect(deck).to.be.instanceof(Deck)
  })

  it('Deck will take in an array', function () {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('Deck will keep count of the deck.cards array', function () {
    expect(deck.count()).to.deep.equal(3)
  });
})
