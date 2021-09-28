import {LocalStorageService} from './localStorage.js';
import {configObj} from '../environments/environments_production.js';

function checkUrl() {
    if (window.location.href.indexOf('auth.html') != -1 && LocalStorageService.getItemStorage('idToken')) {
        document.location.replace(configObj.urlAdmin);
    }
    if (window.location.href.indexOf('admin.html') != -1 && !LocalStorageService.getItemStorage('idToken')) {
        document.location.replace(configObj.urlAuth);
    }
}

checkUrl();