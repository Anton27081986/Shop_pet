import { postData } from './postData.js';
import { getData } from './getData.js';
import { addProdToCart } from '../components/buyWatch.js';
import { showSlider } from '../components/watchSlider.js';
import { getPagination } from '../components/pagination.js';
import { getLike } from '../components/like.js';


export class ApiInteraction {
    static createNewObjForFB(data, name) {
        postData(`https://shop-watch-81f60-default-rtdb.firebaseio.com/${name}.json`, data);
    }

    static getCard() {
        getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/card.json')
        .then(data => Object.entries(data))
        .then(data => new Promise ((resolve, reject) => {
            data.forEach(item => {
                // console.log(item);
                document.querySelector('.new__arrivals__cards').insertAdjacentHTML('afterbegin', `
                <div id="${item[0]}"class="slide" myurl='${item[1].url}' style="background-image: url('${item[1].url}');">
                    <h3 class="name">${item[1].name} &#128077</h3>
                    <h3 class="price">${item[1].price} ${item[1].currency}</h3>
                </div>
                `);
            });
            resolve();
        })
        .then(addProdToCart())
        .then(showSlider())
        .then(getLike()));
    }

    static getOldCollection() {
        getPagination();
        getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/oldCollection.json')
        .then(data => Object.values(data))
        .then(data => {
            return data.slice(0, 3);
        })
        .then(data => {
            // console.log(data);
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
        })
        .then();
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







