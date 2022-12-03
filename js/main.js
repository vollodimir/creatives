//--plavna prokrutka
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    if (id !== '#') {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

//--hiden-btn
const goTop = document.querySelector('.go-top');
window.onscroll = () => {
  if (window.pageYOffset < 800) {
    goTop.style.display = 'none';
  } else {
    goTop.style.display = 'block';
  }
};

//--hiden-btn--end-
