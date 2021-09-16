import { postData } from './postData.js';
import {getData} from './getData.js';

export class ApiInteraction {
    static createNewCard(data) {
        postData('https://shop-watch-81f60-default-rtdb.firebaseio.com/card.json', data);
    }
    static getCard() {
        getData('https://work-prj-57841-default-rtdb.firebaseio.com/card.json')
        .then(data => console.log(data));
    }
}

