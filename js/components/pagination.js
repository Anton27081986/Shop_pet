import {getData} from '../services/getData.js';
import { LocalStorageService } from '../services/localStorage.js';
import { addProdToCart } from './buyWatch.js';

let configArr = [{count: 3},{count: 6}, {count: 9}];


export function getPagination() {
getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/oldCollection.json')
    .then(data => Object.values(data))
    .then(data => new Promise ((resolve, reject) => {
        createPagination(data);
        resolve();
    })
    .then(postToCartFromPagination()));
    
}

function createPagination(data) {
    let count = Math.ceil(data.length / 3);
    // console.log(Math.ceil(7/3));
    for (let i = 1; i <= count; i++) {
        document.querySelector('.pagination').innerHTML += `<a class="number__pagination">${i}</a>`;
    }
    document.querySelectorAll('.number__pagination').forEach(item => {
        item.addEventListener('click', () => {
            configArr.forEach((itemConfig, index) => {
                if (+item.textContent - 1 == index) {
                    let result =  data.slice(+itemConfig.count - 3, +itemConfig.count);

                    document.querySelector('.cards__old__season').innerHTML = '';

                    result.forEach(item => {
                        document.querySelector('.cards__old__season').innerHTML += `
                            <div class="card" style="display: flex; margin-bottom: 130px;">
                                <div style="margin-right: 30px; margin-top: 40px; ">
                                    <img style="background-color: white; width: 200px; height: 210px;" class="img" src="https://st.violity.com/auction/big/auctions/91/53/97/91539738.jpg" alt="">
                                    <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
                                    <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
                                    <button class="btn__add__to__cart">Добавить в корзину</button>
                                </div>
                            </div>
                        `;
                    });
                }
            });
        });
    });
}

export function postToCartFromPagination() {
    const arrProductsForPagination = [];
    document.querySelectorAll('.btn__add__to__cart').forEach(item => {
        item.addEventListener('click', (event) => {
            
            const objFromPagination = {
                name: event.target.parentElement.querySelector('.name__card').textContent,
                price: event.target.parentElement.querySelector('.price__card').textContent 
            };

            arrProductsForPagination.push(objFromPagination);

            LocalStorageService.setItemStorage('products', JSON.stringify(arrProductsForPagination));
            addProdToCart();
            alert('Товар успешно добавлен в корзину');
            
        });
    });
}

// setTimeout(() => {
//     postToCartFromPagination();
// }, 2000);














/*
1 - (1-3)
2 - (4-6)

if (2 == index) 
1 - 1 = 0   - true
1 - 1 = 1   - false
1 - 1 = 2   - false

2 - 1 = 0   - false
2 - 1 = 1   - true
2 - 1 = 2   - false
*/


