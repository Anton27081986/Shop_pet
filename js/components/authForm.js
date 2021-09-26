
import {postDataAuth} from '../services/authorization.js';
import { LocalStorageService } from '../services/localStorage.js';


const inputUsername = document.querySelector('#username'),
      inputPassword = document.querySelector('#password');


document.querySelector('form').addEventListener('submit', getInputValue);



function getInputValue(event) {
    event.preventDefault();

    const authObj = {
        email: inputUsername.value,
        password: inputPassword.value
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
        apiKey = 'AIzaSyBS-sj1w0AJouXQ5qtYDGq3hNI2wW4wvcs';

    postDataAuth(url, apiKey,authObj.email, authObj.password)
    .then(data => {
        if (typeof(data.error.code) == 'undefined') {
            console.log('тест');
        }
        if (data.error.code == 400) {
            console.log(typeof data.error.code);
            alert('Данные не верны');
            return;
        }
        if (!LocalStorageService.getItemStorage('idToken')) {
            setItem(data.idToken);
            document.location.replace("http://127.0.0.1:5500/admin.html");
        } 
        // setItem(data.idToken);
    }); 
}

function setItem (idToken) {
    LocalStorageService.setItemStorage('idToken', idToken);
}






// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

// AIzaSyBS-sj1w0AJouXQ5qtYDGq3hNI2wW4wvcs

