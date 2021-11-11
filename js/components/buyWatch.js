import {LocalStorageService} from '../services/localStorage.js';

const count = document.querySelector('.count__prod');
let arrProducts = [];

export function addProdToCart() {
    let elemtsStorage = LocalStorageService.getItemStorage('products');
     
    if (!elemtsStorage) {
        count.textContent = arrProducts.length;
    } else {
        arrProducts = JSON.parse(LocalStorageService.getItemStorage('products'));
        count.textContent = arrProducts.length;
    }
}

document.querySelector('.btn__slider').addEventListener('click', () => {
    const objWatchFromSlider = {
        name: document.querySelector('.active').children[0].textContent,
        price: document.querySelector('.active').children[1].textContent
    };
    arrProducts.push(objWatchFromSlider);

    LocalStorageService.setItemStorage('products', JSON.stringify(arrProducts));
    addProdToCart();
    alert('Товар успешно добавлен в корзину');
});

