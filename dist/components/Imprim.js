import { HttpStoreClass } from '../services/http.store.class.js';
import { List } from './list.js';
export class bringApi {
    startIndex;
    constructor() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const arrayPokemon = [];
        this.startIndex = 1;
        for (let i = 1; i < 10; i++) {
            arrayPokemon.push(pokeApi.getPokemon(i));
        }
        Promise.all(arrayPokemon).then((values) => new List()); //donde engancha el new list//, values));
    }
}
