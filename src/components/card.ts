import { iPokemon } from '../interfaces/interfaz.js';
import { Component } from './component.js';

export class Card extends Component {
    template: string;
    constructor(public pokemon: iPokemon, selector: string) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let template = `
               <li>
                   <div class="card character__card">
                    <div class="card-body">
                            <h2 class="character__name ">
                                ${this.pokemon.name}
                            </h2>
                        
                            <img
                            src="${this.pokemon.sprites.other['official-artwork'].front_default}"
                            alt="Foto"
                            class="character__picture card-img-top"
                        /> <div class="character__overlay">
                                <ul class="list-unstyled">
                                    <li>Habilidad: ${this.pokemon.abilities[0].ability.name}</li>
                                    <li>Tipo: ${this.pokemon.types[0].type.name}</li>
                                    <li>Altura: ${this.pokemon.height}</li>
                                </ul>
                                <div class="character__actions">
                                    <button class="buttonStar"><img class="buttonStar__star"src="./src/images/estrellafavoritos.png" alt="Añadir a favoritos"></button>
                                </div>
                            </div>
                        </div>
                           
                        </div>
                   </div>
               </li>`;

        return template;
    }
}
