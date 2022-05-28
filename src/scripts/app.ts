import { Controller } from '../components/controller.js';

function app() {
    new Controller();
}

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
