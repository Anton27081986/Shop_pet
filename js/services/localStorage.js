

export class LocalStorageService {
    static clearStorage () {
        localStorage.clear();
    }

    static getItemStorage (key) {
        return localStorage.getItem(key);
    }

    static removeItemStorage (key) {
        localStorage.removeItem(key);
    }

    static setItemStorage (key, value) {
        localStorage.setItem(key, value);
    }
    
}




