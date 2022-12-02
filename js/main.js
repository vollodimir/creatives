//--plavna prokrutka
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    //
    // smoothLink.classList.add('a_active');
    // console.log(smoothLink);

    //
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
//--hiden-btn-vverh
let elNaverh = document.querySelector('.naverh');
window.onscroll = () => {
  if (window.pageYOffset < 800) {
    elNaverh.style.display = 'none';
  } else {
    elNaverh.style.display = 'block';
  }
};

//--hiden-btn-vverh--end-
