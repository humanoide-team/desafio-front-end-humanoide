const products = document.querySelector('.products__wrapper');

fetch('../../server/data.json')
  .then((response) => response.json())
  .then((data) => {
    const results = data.products;

    products.innerHTML = cardView(results);
  });

function cardView(cards) {
  return cards
    .map(
      ({ id, title, price, promotional_price, image, description, sizes }) => {
        return `


          <div class="card">
              <div class="card__header">
                  <img src="../${image}" alt="fantasia" class="card__img">
              </div>
              <div class="card__content">
                  <p class="card__price">De <del>R$ ${price}</del> por <b>R$ ${promotional_price}</b></p>
                  <a href="show.html" class="btn">Mais detalhes</a>
              </div>

              <!-- <p>${id}</p>
              <p>${title}</p>
              <p>${price}</p>
              <p>${promotional_price}</p>
              <p>${image}</p>
              <p>${description}</p>
              <p>${sizes}</p> -->
          </div> <!-- .card -->
      `;
      },
    )
    .join('');
}
