const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    const toggleBurger = () => burger.classList.toggle('js-burger-is-active');
    const toggleNavList = () => navList.classList.toggle('js-nav-list-is-active');
    const showNavLinks = () => navLinks.forEach((link, index) => {
        if (!link.style.animation) {
            link.style.animation = `js-nav-links-appear 0.5s ease forwards ${0.15 + index * 0.1}s`;
        } else {
            link.style.animation = '';
        }
    });
    
    burger.addEventListener('click', () => {
        toggleBurger();
        toggleNavList();
        showNavLinks();
    });
}

navSlide();