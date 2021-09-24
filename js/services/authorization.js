
import {configObj} from '../environments/environments_production.js';


async function postDataAuth(url, apiKey, email, password) {
    const result = await fetch(`${url}${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password, returnSecureToken: true})
    });

    return await result.json();
}

export {postDataAuth};

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=