import { HttpStoreClass } from '../services/http.store.class.js';
import { List } from './list.js';
export class Controller {
    startIndex;
    constructor() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const arrayPokemon = [];
        this.startIndex = 1;
        for (let i = this.startIndex; i < this.startIndex + 10; i++) {
            arrayPokemon.push(pokeApi.getPokemon(i));
        }
        Promise.all(arrayPokemon).then((item) => {
            new List(item, 'slot.hitch__list');
            this.manageComponent();
        });
    }
    newLoop() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const arrayPokemon = [];
        for (let i = this.startIndex; i < this.startIndex + 10; i++) {
            arrayPokemon.push(pokeApi.getPokemon(i));
        }
        Promise.all(arrayPokemon).then((item) => {
            new List(item, 'slot.hitch__list');
            this.manageComponent();
        });
    }
    manageComponent() {
        document
            .querySelectorAll('.buttton__next')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
    }
    handlerButton(ev) {
        console.log(this.startIndex);
        if (ev.target.id === 'previous' &&
            this.startIndex === 1) {
            this.startIndex = this.startIndex;
        }
        else if (ev.target.id === 'next') {
            this.startIndex = this.startIndex + 10;
        }
        else {
            this.startIndex = this.startIndex - 10;
        }
        this.newLoop();
    }
}
