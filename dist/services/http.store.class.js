export class HttpStoreClass {
    url;
    constructor(url) {
        this.url = url;
    }
    getPokemon() {
        // GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
}
