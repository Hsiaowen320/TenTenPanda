<<<<<<< HEAD
import "./assets/scss/all.scss";
import 'bootstrap/dist/js/bootstrap.min.js';

// 下拉選單的 icon 變化效果
const dropdownEl = document.getElementById("productList");
const iconEl = document.getElementById("dropdownIcon");

dropdownEl.addEventListener("show.bs.dropdown", () => {
  iconEl.textContent = "keyboard_arrow_up";
});

dropdownEl.addEventListener("hide.bs.dropdown", () => {
  iconEl.textContent = "keyboard_arrow_down";
});

// Swiper 動畫效果
=======
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

>>>>>>> 33fb37f476540445b08c1a34646db4c90683a8cb
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  initialSlide: 3,
  centeredSlides: true,
  spaceBetween: 12,
  breakpoints: {
    992: {
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
<<<<<<< HEAD
=======




document.addEventListener('DOMContentLoaded', () => {
  const news = document.querySelector('.news');
  if (!news) return;

  const list = news.querySelector('.list-group');
  if (!list) return;

  // 滑鼠 hover
  list.addEventListener('mouseover', (e) => {
    const lab = e.target.closest('label[for^="n"]');
    if (!lab || !list.contains(lab)) return;
    news.setAttribute('data-hover', lab.htmlFor.replace('n','')); // "n3" -> "3"
  });

  // 鍵盤 focus（tab 鍵也有預覽）
  list.addEventListener('focusin', (e) => {
    const lab = e.target.closest('label[for^="n"]');
    if (!lab || !list.contains(lab)) return;
    news.setAttribute('data-hover', lab.htmlFor.replace('n',''));
  });

  // 滑出或失焦 → 還原成 :checked 那張
  list.addEventListener('mouseleave', () => news.removeAttribute('data-hover'));
  list.addEventListener('focusout',   () => news.removeAttribute('data-hover'));
});
>>>>>>> 33fb37f476540445b08c1a34646db4c90683a8cb
