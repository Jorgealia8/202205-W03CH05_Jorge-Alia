import { iPokemon } from '../interfaces/interfaz.js';

export class HttpStoreClass {
    constructor(public url: string) {}
    getPokemon(): Promise<Array<iPokemon>> {
        // GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
}
