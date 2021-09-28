import {LocalStorageService} from './localStorage.js';
import {configObj} from '../environments/environments_production.js';

let interval = setInterval(() => {
    checkTimeLiveToken();
}, 5000);

function checkTimeLiveToken() {
    if (new Date(LocalStorageService.getItemStorage('expiresIn')) < new Date()) {
        LocalStorageService.removeItemStorage('idToken');
        LocalStorageService.removeItemStorage('expiresIn');
        clearInterval(interval);
        document.location.replace(configObj.urlAuth);
    }
}



// console.log(window.location.href.indexOf('admin.html') != -1);

// window.location.href.indexOf('admin.html') != -1
