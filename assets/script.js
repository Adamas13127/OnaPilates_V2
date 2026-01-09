const loader = document.querySelector('.loader');
const popup = document.querySelector('[data-popup]');
const popupClose = document.querySelector('[data-popup-close]');
const popupOpen = document.querySelectorAll('[data-popup-open]');
const nav = document.querySelector('[data-nav]');

window.addEventListener('load', () => {
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1200);
  }

  if (popup) {
    setTimeout(() => popup.classList.add('active'), 4500);
  }
});

if (popupClose && popup) {
  popupClose.addEventListener('click', () => popup.classList.remove('active'));
}

popupOpen.forEach((button) => {
  button.addEventListener('click', () => popup.classList.add('active'));
});

if (nav) {
  const toggleNav = () => {
    if (window.scrollY > 20) {
      nav.classList.add('nav-glass');
    } else {
      nav.classList.remove('nav-glass');
    }
  };

  window.addEventListener('scroll', toggleNav);
  toggleNav();
}
