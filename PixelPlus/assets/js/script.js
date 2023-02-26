function changePicture(url) {
  const socket = document.getElementById('socketImg');
  socket.src = url;
}
let header = document.getElementById('header');
function openMobileMenu() {
  header.classList.toggle('open');
}

const navLink = document.querySelectorAll('.nav ul li');

for (let i = 0; i < navLink.length; ++i) {
  navLink[i].addEventListener('click', () => {
    header.classList.toggle('open');
  });
}

(function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });
})();

let main = new Splide('#main-carousel', {
  type: 'loop',
  perPage: 5,
  perMove: 1,

  breakpoints: {
    986: {
      perPage: 3,
    },
  },
  pagination: true,
  autoplay: false,
  start: 2,
  arrows: false,
  focus: 'center',
  snap: true,
  drag: 'free',
  rewind: true,
  rewindByDrag: true,
  rewindSpeed: 2000,
  autoplay: true,
  interval: 2500,
  updateOnMove: true,
});

let products = new Splide('#product-carousel', {
  type: 'loop',
  perPage: 1,
  perMove: 1,

  pagination: false,
  start: 0,
  arrows: false,
  focus: 'center',
  snap: true,
  drag: 'free',
  rewind: true,
  rewindByDrag: true,
  rewindSpeed: 2000,
  autoplay: true,
  interval: 2500,
  pauseOnFocus: true,
});

main.mount();
products.mount();

function goToSlide(index) {
  products.go(index);
  const { Autoplay } = products.Components;
  Autoplay.pause();
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach((el) => observer.observe(el));
