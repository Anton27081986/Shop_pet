const modalSearch = document.querySelector('.modal__search'),
      searchItem = document.querySelector('.search__item');


function showModalSearch() {
    modalSearch.classList.add('show');
    modalSearch.classList.remove('hide');
}

function closeModalSearch() {
    modalSearch.classList.add('hide');
    modalSearch.classList.remove('show');
}

document.querySelector('.search__item').addEventListener('click', (event) => {
    event.preventDefault();
    showModalSearch();

    document.querySelector('.modal__search__close').addEventListener('click', () => {
        closeModalSearch();
    });
    
});

