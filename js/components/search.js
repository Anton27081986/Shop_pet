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
    
});

function searchProducts() {
    document.querySelector('.btn__search').addEventListener('click', () => {
        getData(`${configObj.urlGetCardFromFB}`)
        .then(data => {
            console.log(Object.values(data));
            filtrArr(Object.values(data), document.querySelector('.search__product').value);
        });
    });
}

function filtrArr(data, searchValue) {
    // console.log(searchValue);
    // console.log(data);
    let arrProduct = [];

    arrProduct = data.filter(item => item.name == searchValue);
    console.log(arrProduct);
}