import { iPokemon } from '../interfaces/interfaz.js';
import { HttpStoreClass } from '../services/http.store.class.js';
import { List } from './list.js';

export class Controller {
    startIndex: number;
    constructor() {
        const pokeApi = new HttpStoreClass(
            'https://pokeapi.co/api/v2/pokemon/'
        );
        const arrayPokemon: Array<Promise<iPokemon>> = [];
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
        const pokeApi = new HttpStoreClass(
            'https://pokeapi.co/api/v2/pokemon/'
        );
        const arrayPokemon: Array<Promise<iPokemon>> = [];
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
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    handlerButton(ev: Event) {
        console.log(this.startIndex);
        if (
            (<HTMLElement>ev.target).id === 'previous' &&
            this.startIndex === 1
        ) {
            this.startIndex = this.startIndex;
        } else if (
            (<HTMLElement>ev.target).id === 'next' &&
            this.startIndex === 841
        ) {
            this.startIndex = this.startIndex;
        } else if ((<HTMLElement>ev.target).id === 'next') {
            this.startIndex = this.startIndex + 10;
        } else {
            this.startIndex = this.startIndex - 10;
        }
        this.newLoop();
    }
}
