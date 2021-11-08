import { ApiInteraction } from "../services/APIService.js";
import { LocalStorageService } from "../services/localStorage.js";
import { postData } from "../services/postData.js";

const modal = document.querySelector('.modal'),
      cart = document.querySelector('.header__cart'),
      itemProduct = document.querySelector('.item__prodaucts'),
      modalSum = document.querySelector('.modal__sum'),
      modalCount = document.querySelector('.modal__count'),
      inputNumber = document.querySelector('.input-number'),
      inputName = document.querySelector('.input-name');

function showModalCart() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModalCart() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    itemProduct.innerHTML = '';
}

function modalCart() {
    cart.addEventListener('click', (event) => {
        event.preventDefault();
        showModalCart();
        getItemForListProduct();
        getProductsForUserBuy();
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            closeModalCart();
        }
    });

    modal.addEventListener('click', (event) => {
        if(event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModalCart();
        }
    });

    clearCart();
}

modalCart();

//Получение списка продуктов из LS и вывод в модалку
function getItemForListProduct() {
    let itemProd = getDataFromLS();
    let count = 0;

    itemProd.forEach(item => {
        // console.log(item);
        itemProduct.innerHTML += `${item.name}
        ${item.price}<br>`;
        count += parseInt(item.price, 10);

    });
    modalCount.textContent = itemProd.length;
    modalSum.textContent = count + '$';

}

function getProductsForUserBuy() {
    let arrProd = getDataFromLS();

    const objProductsToFB = {
        count: modalCount.textContent, 
        sum: modalSum.textContent,
        products: arrProd
    };
    // console.log(objProductsToFB);

    document.querySelector('.form__modal').addEventListener('submit', (event) => {
        event.preventDefault();
        const inpObj = {
            name: inputName.value,
            number: inputNumber.value
        };
        // console.log(inpObj);

        const objForm = {
            ...objProductsToFB,
            ...inpObj
        };
        // console.log(objForm);
        ApiInteraction.createNewObjForFB(objForm, 'buyers');
    });
}

//Получение данных из ЛокалСтореджа
function getDataFromLS() {
    let itemProd = [];
    if (LocalStorageService.getItemStorage('products')) {
        itemProd = JSON.parse(LocalStorageService.getItemStorage('products'));
    }
    return itemProd;
}

function clearCart() {
    document.querySelector('.btn__clear__cart').addEventListener('click', () => {
        LocalStorageService.removeItemStorage('products');
        alert('Корзина очищена');
        window.location.reload();
    });
}








