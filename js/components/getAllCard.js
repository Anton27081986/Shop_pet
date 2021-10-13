import {ApiInteraction} from '../services/APIService.js';


function getAllCard() {
    ApiInteraction.getCard();

}

function getOldCard() {
    ApiInteraction.getOldCollection();
}

export {getAllCard, getOldCard};
