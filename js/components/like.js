import { postData } from "../services/postData.js";
import { getData } from "../services/getData.js";

const modalLike = document.querySelector('.modal__like'),
      headerLike = document.querySelector('.header__like');

document.querySelector('.header__like').addEventListener('click', (e) => {
    e.preventDefault();
    showModalSettings();
});

document.querySelector('.modal__like__close').addEventListener('click', closeModalSettins);

function showModalSettings() {
    modalLike.classList.add('show');
    modalLike.classList.remove('hide');

    showLikesInModal();
}

function closeModalSettins() {
    modalLike.classList.add('hide');
    modalLike.classList.remove('show');
}


export function getLike() {
    document.querySelectorAll('.name').forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(document.querySelector('.active').getAttribute('myurl'));
            const objLike = {
                name: document.querySelector('.active').querySelector('.name').textContent,
                price:document.querySelector('.active').querySelector('.price').textContent,
                url: document.querySelector('.active').getAttribute('myurl')
            };

            postData('https://shop-watch-81f60-default-rtdb.firebaseio.com/likes.json', objLike);

        });
    });

}

function showLikesInModal() {
    getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/likes.json')
    .then(data => Object.values(data))
    .then(data => data.forEach(item => {
        document.querySelector('.like__result').innerHTML += `
        <div class="card" style="display: flex;">
            <div style="margin-left: 50px; margin-top: 40px; min-width: 100px ">
                <img style="background-color: white; width: 250px; height: 270px;" class="img" src="${item.url}" alt="">
                <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
                <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
                <button class="btn__buy">Купить</button>
            </div>
        </div>
        `;
    }));
    
}