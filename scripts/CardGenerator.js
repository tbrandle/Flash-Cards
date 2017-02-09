import { Card } from '../scripts/cards.js'

const fs = require('fs');

export class CardGenerator {
  constructor(cardFile) {
    this.cards = fs.readFileSync(cardFile, 'utf8')
          .trim()
          .split('\n')
          .map(value => value.split(','))
          .reduce((array, value)=>{
            let card = new Card (value[0], value[1])
            array.push(card)
            return array;
          }, [])
  }
}
