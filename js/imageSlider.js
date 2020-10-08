const imgSlider = () => {
    const firstSlide = 0;
    const lastSlide = 12; // NOTE: keep it synchronized with index.html
    const slidingWaitTime = 5000;
    const restartWaitTime = 2000;

    const slidedElements = document.querySelectorAll('#hero .slider .slided');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    let currSlide = firstSlide;

    const slideForwards = () => {
        const nextSlide = currSlide < lastSlide ? currSlide + 1 : firstSlide;
        slidedElements[currSlide].classList.toggle('hidden'); // hide
        slidedElements[nextSlide].classList.toggle('hidden'); // show
        currSlide = nextSlide;
    };

    const slideBackwards = () => {
        const prevSlide = currSlide > firstSlide ? currSlide - 1 : lastSlide;
        slidedElements[currSlide].classList.toggle('hidden'); // hide
        slidedElements[prevSlide].classList.toggle('hidden'); // show
        currSlide = prevSlide;
    };

    const startSliding = () => {
        return setInterval(slideForwards, slidingWaitTime);
    };

    const restartWithDelay = () => {
        window.clearInterval(interval);
        window.clearTimeout(timeout);
        return setTimeout(() => {
            interval = startSliding();
        }, restartWaitTime);
    };

    let interval = startSliding();
    let timeout;

    nextButton.addEventListener('click', () => {
        slideForwards();
        timeout = restartWithDelay();
    });

    prevButton.addEventListener('click', () => {
        slideBackwards();
        timeout = restartWithDelay();
    });
};

imgSlider();
