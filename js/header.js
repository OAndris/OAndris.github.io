$('document').ready(() => {
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

    // Since 'burger' is a dynamically created element, make sure it already exists before adding an event listener to it.
    const burger = document.querySelector('#burger');
    if (burger) {
        navSlide();
    } else {
        setTimeout(navSlide, 500);
    }
});
