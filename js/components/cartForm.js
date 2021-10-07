import { LocalStorageService } from "../services/localStorage.js";

const modal = document.querySelector('.modal'),
      cart = document.querySelector('.header__cart'),
      itemProduct = document.querySelector('.item__prodaucts'),
      modalSum = document.querySelector('.modal__sum'),
      modalCount = document.querySelector('.modal__count');

function showModalCart() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModalCart() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modalCart() {
    cart.addEventListener('click', (event) => {
        event.preventDefault();
        showModalCart();
        getItemForListProduct();

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
}

modalCart();

function getItemForListProduct() {
    let itemProd = [];
    if (LocalStorageService.getItemStorage('products')) {
        itemProd = JSON.parse(LocalStorageService.getItemStorage('products'));
    }

    let count = 0;
    itemProd.forEach(item => {
        console.log(item);
        itemProduct.innerHTML += `${item.name}
        ${item.price}<br>`;
        count += parseInt(item.price, 10);

    });

    modalCount.textContent = itemProd.length;
    modalSum.textContent = count + '$';
    
}






