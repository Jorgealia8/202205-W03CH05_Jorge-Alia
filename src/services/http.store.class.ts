import { iPokemon } from '../interfaces/interfaz.js';

export class HttpStoreClass {
    constructor(public url: string) {}
    getPokemon(id: number): Promise<iPokemon> {
        // GET
        return fetch(this.url + id).then((resp) => {
            return resp.json();
        });
    }
}
