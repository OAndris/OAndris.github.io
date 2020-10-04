const imgSlider = () => {
    const firstImage = 0;
    const lastImage = 12; // NOTE: keep it synchronized with index.html
    const initialWaitTime = 0;
    const slidingWaitTime = 5000;

    const imageElements = document.querySelectorAll('#hero .slider .slided');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    let currImage = firstImage;

    const slideForwards = () => {
        const nextImage = currImage < lastImage ? currImage + 1 : firstImage;
        imageElements[currImage].classList.toggle('hidden'); // hide
        imageElements[nextImage].classList.toggle('hidden'); // show
        currImage = nextImage;
    };

    const slideBackwards = () => {
        const prevImage = currImage > firstImage ? currImage - 1 : lastImage;
        imageElements[currImage].classList.toggle('hidden'); // hide
        imageElements[prevImage].classList.toggle('hidden'); // show
        currImage = prevImage;
    };

    nextButton.addEventListener('click', () => slideForwards());
    prevButton.addEventListener('click', () => slideBackwards());
    setTimeout(() => {
        setInterval(slideForwards, slidingWaitTime);
    }, initialWaitTime);
};

imgSlider();
