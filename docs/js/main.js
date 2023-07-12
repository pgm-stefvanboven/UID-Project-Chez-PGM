const imageContainer = document.querySelector('.image-container');
const scrollText = document.querySelector('.scroll-text');
let previousScrollPosition = window.pageYOffset;
let isScrollingDown = false;

const fadeInText = () => {
  const rect = imageContainer.getBoundingClientRect();
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  if (isScrollingDown && scrollPosition > rect.top && scrollPosition < rect.bottom) {
    scrollText.style.opacity = '1';
  } else if (!isScrollingDown && scrollPosition < rect.top) {
    scrollText.style.opacity = '0';
  }

  previousScrollPosition = scrollPosition;
};

window.addEventListener('scroll', fadeInText);
window.addEventListener('resize', fadeInText);