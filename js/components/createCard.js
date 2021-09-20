import {ApiInteraction} from '../services/APIService.js';

const inputName = document.querySelector('.name'),
      inputUrl = document.querySelector('.url'),
      inputPrice = document.querySelector('.price'),
      inputCurrency = document.querySelector('.currency'),
      form = document.querySelector('.railway');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const objForCreate = {
        name: inputName.value,
        url: inputUrl.value,
        price: inputPrice.value,
        currency: inputCurrency.value
    };

    ApiInteraction.createNewCard(objForCreate);
});





      