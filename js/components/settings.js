

const modalSettings = document.querySelector('.modal__settings'),
      headerWrapper = document.querySelector('.header__wrapper');

document.querySelector('.header__link__settings').addEventListener('click', (e) => {
    e.preventDefault();
    showModalSettings();
});

document.querySelector('.modal__settings__close').addEventListener('click', closeModalSettins);

function showModalSettings() {
    modalSettings.classList.add('show');
    modalSettings.classList.remove('hide');

    document.querySelector('.modal__checkbox__light').addEventListener('click', () => {
        headerWrapper.classList.add('header__wrapper__light');
        headerWrapper.classList.remove('header__wrapper');
    });

    document.querySelector('.modal__checkbox__dark').addEventListener('click', () => {
        headerWrapper.classList.add('header__wrapper');
        headerWrapper.classList.remove('header__wrapper__light');
    });
}

function closeModalSettins() {
    modalSettings.classList.add('hide');
    modalSettings.classList.remove('show');
}


