import { postData } from './postData.js';
import {getData} from './getData.js';
import {addProdToCart} from '../components/buyWatch.js';
import { showSlider } from '../components/watchSlider.js';


export class ApiInteraction {
    static createNewObjForFB(data, name) {
        postData(`https://shop-watch-81f60-default-rtdb.firebaseio.com/${name}.json`, data);
    }

    static getCard() {
        getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/card.json')
        .then(data => Object.values(data))
        .then(data => new Promise ((resolve, reject) => {
            data.forEach(item => {
                document.querySelector('.new__arrivals__cards').insertAdjacentHTML('afterbegin', `
                <div class="slide" style="background-image: url('${item.url}');">
                    <h3 class="name">${item.name}</h3>
                    <h3 class="price">${item.price} ${item.currency}</h3>
                </div>
                `);
            });
            resolve();
        })
        .then(addProdToCart())
        .then(showSlider()));
    }

    static getOldCollection() {
        getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/oldCollection.json')
        .then(data => Object.values(data))
        .then(data => {
            data.forEach(item => {
                document.querySelector('.cards__old__season').insertAdjacentHTML('afterbegin', `
                    <div class="card" style="display: flex; margin-bottom: 130px;">
                        <div style="margin-left: 50px; margin-top: 40px; ">
                            <img style="background-color: white; width: 200px; height: 270px;" class="img" src="${item.url}" alt="">
                            <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
                            <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
                            <button class="btn__buy">Купить</button>
                        </div>
                    </div>
                `);
            });
        });
    }
}













// static getCard() {
    //     getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/card.json')
    //     .then(data => Object.values(data))
    //     .then(data => {
    //         data.forEach(item => {
    //             document.querySelector('.new__arrivals__cards').insertAdjacentHTML('afterbegin', `
    //                 <div class="card" style="display: flex">
    //                     <div style="margin-left: 100px; margin-top: 40px">
    //                         <img style="background-color: white; width: 220px; height: 320px;" class="img" src="${item.url}" alt="">
    //                         <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
    //                         <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
    //                         <button class="btn__buy">Купить</button>
    //                     </div>
    //                 </div>
    //             `);
    //         });
    //     });
    // }







