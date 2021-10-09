import { ApiInteraction } from "../services/APIService.js";

const windowSubscribe = document.querySelector('.window__input__subscribe');

document.querySelector('.form__subscribe').addEventListener('submit', (event) => {
    event.preventDefault();
    const objSubscribe = {
        mail: windowSubscribe.value
    };
    
    ApiInteraction.createNewObjForFB(objSubscribe, 'mailSubscribe');
});

