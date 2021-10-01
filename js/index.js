import {getAllCard} from './components/getAllCard.js';
import {addProdToCart} from './components/buyWatch.js';

getAllCard();

setTimeout(() => {
    addProdToCart();
}, 1000);