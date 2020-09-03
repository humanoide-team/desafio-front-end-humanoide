const products = document.querySelector('.products__wrapper');

fetch('../../server/data.json')
  .then((response) => response.json())
  .then((data) => {
    const results = data.products;

    products.innerHTML = cardView(results);
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
