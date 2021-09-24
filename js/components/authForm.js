
import {postDataAuth} from '../services/authorization.js';


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

        // console.log(url, apiKey,authObj.email, authObj.password);
    postDataAuth(url, apiKey,authObj.email, authObj.password)
    .then(data => {
        console.log(data);
    });

}



// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

// AIzaSyBS-sj1w0AJouXQ5qtYDGq3hNI2wW4wvcs