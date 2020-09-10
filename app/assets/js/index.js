import cardView from './cardView.js';

const products = document.querySelector('.products__wrapper');

fetch('../../server/data.json')
  .then((response) => response.json())
  .then((data) => {
    const results = data.products;

    products.innerHTML = cardView(results);
  });
