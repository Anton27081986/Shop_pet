import {ApiInteraction} from '../services/APIService.js';

const inputName = document.querySelector('.name'),
      inputUrl = document.querySelector('.url'),
      inputPrice = document.querySelector('.price'),
      inputCurrency = document.querySelector('.currency'),
      form = document.querySelector('.railway'),
      collection = document.querySelector('.select__collection');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const objForCreate = {
        name: inputName.value,
        url: inputUrl.value,
        price: inputPrice.value,
        currency: inputCurrency.value,
        collection: collection.value
    };

    // console.log(objForCreate);
    ApiInteraction.createNewObjForFB(objForCreate, objForCreate.collection);
    clearAdminModal();
});

function clearAdminModal() {
    inputName.value = '';
    inputUrl.value = '';
    inputPrice.value = '';
    inputCurrency.value = '';
}





      