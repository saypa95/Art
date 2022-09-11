const slider = (slideSelector, direction, prev, next) => {
  let slideIndex = 0,
    paused = false;
  const slides = document.querySelectorAll(slideSelector);

  function showSlides(n) {
    if (n > slides.length-1) {
      slideIndex = 0;
    }

    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";
  }

  showSlides(slideIndex);

  function changeSlide(n) {
    showSlides((slideIndex += n));
  }

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      changeSlide(-1);
    });

    nextBtn.addEventListener("click", () => {
      changeSlide(+1);
    });
  } catch (error) {}

  function activateAnimation() {
    if (direction == "vertical") {
      paused = setInterval(() => {
        changeSlide(+1);
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeSlide(1);
      }, 3000);
    }
  }
  activateAnimation();

  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

export default slider;
