import { Component } from './component.js';
import { Menu } from './menu.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        new Menu('slot.menu');
    }
    createTemplate() {
        return `
        <header>
            <h1>POKEMON</h1>
            <slot class='menu'></slot>
        </header>
        `;
    }
}
