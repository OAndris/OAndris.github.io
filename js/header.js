const navSlide = () => {
    const header = document.querySelector('header');
    const burger = document.querySelector('#burger');
    const navList = document.querySelector('#nav-list');

    burger.addEventListener('click', () => {
        header.classList.toggle('js-burger-is-active');
        burger.classList.toggle('js-burger-is-active');
        navList.classList.toggle('js-burger-is-active');
    });
};

navSlide();
