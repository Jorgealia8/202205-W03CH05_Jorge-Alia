import { iPokemon } from '../interfaces/interfaz.js';
import { Card } from './card.js';
import { Component } from './component.js';

export class List extends Component {
    template: string;
    constructor(public arrayPokemon: Array<iPokemon>, selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        arrayPokemon.forEach((item) => new Card(item, 'ul.list'));
    }
    createTemplate() {
        let template = `
        <div class="app container">
                <ul class="list">

              </ul>
                        
<div class="container__buttons">
 <button class="button buttton__next button__previous" id="previous">previous</button>
                              <button class="button buttton__next" id="next">next</button>
                              
                         </div>
        </div>
                    `;
        return template;
    }
}
