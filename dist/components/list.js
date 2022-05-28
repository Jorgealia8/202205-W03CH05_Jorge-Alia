import { Card } from './card.js';
import { Component } from './component.js';
export class List extends Component {
    arrayPokemon;
    template;
    constructor(arrayPokemon, selector) {
        super();
        this.arrayPokemon = arrayPokemon;
        this.template = this.createTemplate();
        this.render(selector);
        arrayPokemon.forEach((item) => new Card(item, 'ul.list'));
    }
    createTemplate() {
        let template = `
        <div class="app container">
                <ul class="list">

              </ul>
                              <button class="button">NEXT</button>
                               <button class="button"> PREVIOUS</button>
            </div>
                    `;
        return template;
    }
}