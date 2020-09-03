const products = document.querySelector('.products__wrapper');
const productDetails = document.querySelector('.banner__container');

fetch('../../server/data.json')
  .then((response) => response.json())
  .then((data) => {
    const results = data.products;

    products.innerHTML = cardView(results);
    productDetails.innerHTML = productDetais(results[2]);
  });

function cardView(cards) {
  return cards
    .slice(0, 3)
    .map(({ price, promotional_price, image }) => {
      const priceBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price);

      const promotionalPriceBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(promotional_price);

      return `
        <div class="card">
            <div class="card__header">
                <img src="../${image}" alt="fantasia" class="card__img">
            </div>
            <div class="card__content">
                ${
                  promotional_price != undefined
                    ? `<p class="card__price">De <del>${priceBRL}</del> por <b>${promotionalPriceBRL}</b></p>`
                    : `<p class="card__price">Por <b>${priceBRL}</b></p>`
                }
                <a href="show.html" class="btn">Mais detalhes</a>
            </div>
        </div> <!-- .card -->
      `;
    })
    .join('');
}

function productDetais({
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

  return `
    <div class="banner__img">
        <img src="../${image}" alt="fantasia ${id}">
    </div>
    <div class="banner__inner">
        <h1 class="banner__title">${title}</h1>
        <p class="banner__text">${description}</p>
        ${
          promotional_price != undefined
            ? `<p class="banner__price">De <del>${priceBRL}</del> por <b>${promotionalPriceBRL}</b></p>`
            : `<p class="banner__price">Por <b>${priceBRL}</b></p>`
        }
        <div class="banner__sizes">
            <h2 class="banner__sizes__title">Escolha o tamanho</h2>
            <div class="banner__sizes__wrapper">
                ${sizes
                  .map(
                    (size) =>
                      `<button class="btn btn--outline">${size}</button>`,
                  )
                  .join('')}
            </div>
        </div>
        <button class="btn" onclick="openModal()">Adicionar ao carrinho</button>
    </div>
  `;
}

// Modal
function openModal() {
  document.querySelector('.modal').style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
}

function closeModal() {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
}
