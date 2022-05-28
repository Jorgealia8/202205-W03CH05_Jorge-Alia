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
        Promise.all(arrayPokemon).then((item) => new List(item, 'slot.hitch__list'));
        setTimeout(() => {
            this.manageComponent();
        }, 1000);
    }
    // newLoop() {
    //     const pokeApi = new HttpStoreClass(
    //         'https://pokeapi.co/api/v2/pokemon/'
    //     );
    //     const arrayPokemon: Array<Promise<iPokemon>> = [];
    //     this.startIndex = 1;
    //     for (let i = this.startIndex; i < this.startIndex + 10; i++) {
    //         arrayPokemon.push(pokeApi.getPokemon(i));
    //     }
    //     Promise.all(arrayPokemon).then(
    //         (item) => new List(item, 'slot.hitch__list')
    //     );
    //     setTimeout(() => {
    //         this.manageComponent();
    //     }, 1000);
    // }
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
    }
    handlerButton(ev) {
        console.log('click');
        this.startIndex = this.startIndex + 10;
        console.log(this.startIndex);
        return this.startIndex;
    }
}
