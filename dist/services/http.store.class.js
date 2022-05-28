export class HttpStoreClass {
    url;
    constructor(url) {
        this.url = url;
    }
    getPokemon(id) {
        // GET
        return fetch(this.url + id).then((resp) => {
            return resp.json();
        });
    }
}
