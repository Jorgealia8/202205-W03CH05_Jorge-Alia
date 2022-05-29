import { Controller } from '../components/controller.js';
import { Header } from '../components/header.js';

function app() {
    new Controller();
}

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
