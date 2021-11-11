import { postData } from "../services/postData.js";
import { getData } from "../services/getData.js";
import { deleteData } from "../services/deleteData.js";

const modalLike = document.querySelector('.modal__like'),
      headerLike = document.querySelector('.header__like');

document.querySelector('.header__like').addEventListener('click', (e) => {
    e.preventDefault();
    showModalLike();

    document.querySelector('.modal__like__close').addEventListener('click', closeModalLike);

    modalLike.addEventListener('click', (event) => {
        if (event.target === modalLike || event.target.getAttribute('data-closw') == '') {
            closeModalLike();
        }
    });
});

function showModalLike() {
    modalLike.classList.add('show');
    modalLike.classList.remove('hide');

    showLikesInModal();
}

function closeModalLike() {
    modalLike.classList.add('hide');
    modalLike.classList.remove('show');

    document.querySelector('.like__result').innerHTML = '';
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
    .then(data => Object.entries(data))
    .then(data => new Promise((resolve, reject) => {
        console.log(data);
        data.forEach(item => {
            // console.log(item);
            document.querySelector('.like__result').innerHTML += `
            <div id=${item[0]} class="card" style="display: flex;">
                <div style="margin-left: 50px; margin-top: 40px; min-width: 100px ">
                    <img style="background-color: white; width: 250px; height: 270px;" class="img" src="${item[1].url}" alt="">
                    <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item[1].name}</p>
                    <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item[1].price }</p>
                    <button class="btn__del__like">Удалить</button>
                </div>
            </div>
            `;
        });
        resolve();
    })
    .then(deleteLikeInModal()));
}

function deleteLikeInModal() {
    document.querySelectorAll('.btn__del__like').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.parentElement.parentElement.id;

            deleteData(`https://shop-watch-81f60-default-rtdb.firebaseio.com/likes/${id}.json`);
            alert('Товар удален');
            window.location.reload();

        });
    });
}

