const imgSlider = () => {
  const firstImage = 0;
  const lastImage = 12; // NOTE: keep it synchronized with index.html
  const initialWaitTime = 0;
  const slidingWaitTime = 3500;

  const imageElements = document.querySelectorAll("#hero div.slider img");
  let currentImage = firstImage + 1; // initially, switch directly to second image (skip switching from first to first)

  const slide = () => {
    const previousImage = currentImage === 0 ? lastImage : currentImage - 1;
    imageElements[currentImage].classList.toggle("hidden"); // show
    imageElements[previousImage].classList.toggle("hidden"); // hide
    currentImage = currentImage < lastImage ? currentImage + 1 : firstImage;
  };

  setTimeout(() => {
    setInterval(slide, slidingWaitTime);
  }, initialWaitTime);
};

imgSlider();
