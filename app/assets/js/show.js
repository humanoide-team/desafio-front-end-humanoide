import { openModal, closeModal } from './modal.js';
import cardView from './cardView.js';

const products = document.querySelector('.products__wrapper');
const bannerImg = document.querySelector('.banner__img img');
const bannerTitle = document.querySelector('.banner__title');
const bannerText = document.querySelector('.banner__text');
const bannerPrice = document.querySelector('.banner__price');
const bannerSizesWrapper = document.querySelector('.banner__sizes__wrapper');
const addCart = document.querySelector('.add-cart');
const keepBuy = document.querySelectorAll('.modal__footer button');

fetch('../../server/data.json')
  .then((response) => response.json())
  .then((data) => {
    const results = data.products;

    products.innerHTML = cardView(results);
    showInfo(results[2]);
  });

function showInfo({
  id,
  title,
  image,
  description,
  price,
  promotional_price,
  sizes,
}) {
  const priceBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  const promotionalPriceBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(promotional_price);

  bannerImg.setAttribute('src', `../${image}`);
  bannerImg.setAttribute('alt', `Fantasia ${id}`);

  bannerTitle.innerHTML = title;
  bannerText.innerHTML = description;

  promotional_price != undefined
    ? (bannerPrice.innerHTML = `De <del>${priceBRL}</del> por <b>${promotionalPriceBRL}</b>`)
    : (bannerPrice.innerHTML = `Por <b>${priceBRL}</b>`);

  bannerSizesWrapper.innerHTML = sizes
    .map((size) => `<button class="btn btn--outline">${size}</button>`)
    .join('');
}

// Modal
addCart.addEventListener('click', openModal);
keepBuy.forEach((element) => {
  element.addEventListener('click', closeModal);
});
