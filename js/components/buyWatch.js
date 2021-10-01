import {LocalStorageService} from '../services/localStorage.js';

const count = document.querySelector('.count__prod');

export function addProdToCart() {
    

    let elemtsStorage = LocalStorageService.getItemStorage('products'),
        arrProducts = [];
     
    if (!elemtsStorage) {
        count.textContent = arrProducts.length;
    } else {
        arrProducts = JSON.parse(LocalStorageService.getItemStorage('products'));
        count.textContent = arrProducts.length;
    }

        
    document.querySelectorAll('.btn__buy').forEach (item => {
        item.addEventListener('click', () => {
            const obj = {
                name: item.parentElement.querySelector('.name__card').textContent,
                price: item.parentElement.querySelector('.price__card').textContent
            };
            arrProducts.push(obj);

            LocalStorageService.setItemStorage('products', JSON.stringify(arrProducts));
            addProdToCart();
        });
    });

    

    
    
}

