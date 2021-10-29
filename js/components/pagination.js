import {getData} from '../services/getData.js';

let configArr = [{count: 3},{count: 6}, {count: 9}];


export function getPagination() {
getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/oldCollection.json')
    .then(data => Object.values(data))
    .then(data => createPagination(data));
    
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
                                <div style="margin-left: 50px; margin-top: 40px; ">
                                    <img style="background-color: white; width: 200px; height: 270px;" class="img" src="${item.url}" alt="">
                                    <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
                                    <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
                                    <button class="btn__buy">Купить</button>
                                </div>
                            </div>
                        `;
                    });
                }
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
            });
        });
    });
}





