
import {postDataAuth} from '../services/authorization.js';
import { LocalStorageService } from '../services/localStorage.js';
import { configObj } from '../environments/environments_production.js';


const inputUsername = document.querySelector('#username'),
      inputPassword = document.querySelector('#password');


document.querySelector('form').addEventListener('submit', getInputValue);



function getInputValue(event) {
    event.preventDefault();

    const authObj = {
        email: inputUsername.value,
        password: inputPassword.value
    };

    // let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
        // apiKey = 'AIzaSyBS-sj1w0AJouXQ5qtYDGq3hNI2wW4wvcs';

    postDataAuth(configObj.url, configObj.apiKey,authObj.email, authObj.password)
    .then(data => {
        
        if (!data.idToken) {
            alert('Данные не верны');
            return;
        }
        if (!LocalStorageService.getItemStorage('idToken')) {
            setItem(data.idToken, data.expiresIn);
            document.location.replace(configObj.urlAdmin);
        } 
        if (LocalStorageService.getItemStorage('idToken')) {
            document.location.replace(configObj.urlAdmin);
        }
    }); 
}

function setItem (idToken, expiresIn) {
    const liveTimeToken = new Date(new Date().getTime() + +expiresIn * 1000);
    LocalStorageService.setItemStorage('idToken', idToken);
    LocalStorageService.setItemStorage('expiresIn',liveTimeToken);

}


// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

// AIzaSyBS-sj1w0AJouXQ5qtYDGq3hNI2wW4wvcs


