import { getData } from "../services/getData.js";
import {configObj} from "../environments/environments_production.js";


const modalSearch = document.querySelector('.modal__search'),
      searchItem = document.querySelector('.search__item');


function showModalSearch() {
    modalSearch.classList.add('show');
    modalSearch.classList.remove('hide');

}

function closeModalSearch() {
    modalSearch.classList.add('hide');
    modalSearch.classList.remove('show');
}

document.querySelector('.search__item').addEventListener('click', (event) => {
    event.preventDefault();
    showModalSearch();
    searchProducts();

    document.querySelector('.modal__search__close').addEventListener('click', () => {
        closeModalSearch();
    });

    modalSearch.addEventListener('click', (event) => {
        if (event.target === modalSearch || event.target.getAttribute('data-close') == '') {
            closeModalSearch();
        }
    });
    
});

function searchProducts() {
    document.querySelector('.btn__search').addEventListener('click', () => {
        getData(`${configObj.urlGetCardFromFB}`)
        .then(data => {
            // console.log(Object.values(data));
            filtrArr(Object.values(data), document.querySelector('.search__product').value);
        });
    });
}

function filtrArr(data, searchValue) {
    // console.log(searchValue);
    // console.log(data);
    let arrProduct = [];

    arrProduct = data.filter(item => item.name == searchValue);
    // console.log(arrProduct);
    arrProduct.forEach(item => {
        console.log(item);
        document.querySelector('.search__result').innerHTML += `
        <div class="card" style="display: flex;">
            <div style="margin-left: 50px; margin-top: 40px; min-width: 100px ">
                <img style="background-color: white; width: 250px; height: 270px;" class="img" src="https://st.violity.com/auction/big/auctions/91/53/97/91539738.jpg" alt="">
                <p class="name__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
                <p class="price__card" style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
                <button class="btn__buy">Купить</button>
            </div>
        </div>
        `;
    });
}


