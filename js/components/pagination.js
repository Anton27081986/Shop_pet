import {getData} from '../services/getData.js';



export function getPagination() {
getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/oldCollection.json')
    .then(data => Object.values(data))
    .then(data => createPagination(data));
    
}

function createPagination(data) {
    

    let count = data.length / 3;
    for (let i = count; i >= 0; i--) {
        document.querySelector('.pagination').insertAdjacentHTML('afterbegin', `
            <a class="number__pagination" style="color: white; z-index: 1000; border: 1px solid white; text-align: centr; cursor: pointer;">${i + 1}</a>
        `);
    }

    document.querySelectorAll('.number__pagination').forEach(item => {
        item.addEventListener('click', () => {
           
            result(item.textContent);
            // console.log(data.slice(item.textContent, +item.textContent + 3));
            // console.log(data.slice());
        });
    });

    function result(textContent) {
        if (textContent) {
            console.log(data.slice(textContent, +textContent + 3));
        }
    }

//     1 - (1-3) 
//     2 - (4-6)
//     3 - (7-9)
}



