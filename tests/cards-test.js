import { expect } from 'chai';
import { Card } from '../scripts/cards.js';

const fs = require('fs');

describe('Testing Card', function () {

  let card = new Card("What is the capital of Alaska?", "Juneau");

  it('should instantiate an object', function () {
    expect(card).to.be.instanceof(Card)
  })

  it('Card should have a question and an answer', function () {
    expect(card.question).to.exist;
    expect(card.answer).to.exist;
  });

})
