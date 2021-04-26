const products = [
    {
      "id": 1,
      "title": "Fantasia 1",
      "price": 200.00,
      "promotional_price": 100.00,
      "image": "../layout/images/fantasia-01.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices neque. Arcu dui vivamus arcu felis bibendum. Fermentum dui faucibus in ornare. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Felis imperdiet proin fermentum leo.",
      "sizes": [
        "PP",
        "P",
        "M",
        "G"
      ]
    },
    {
      "id": 2,
      "title": "Fantasia 2",
      "price": 120.00,
      "image": "../layout/images/fantasia-02.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices neque. Arcu dui vivamus arcu felis bibendum. Fermentum dui faucibus in ornare. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Felis imperdiet proin fermentum leo.",
      "sizes": [
        "P",
        "M",
        "G"
      ]
    },
    {
      "id": 3,
      "title": "Fantasia 3",
      "price": 130.00,
      "promotional_price": 90.00,
      "image": "../layout/images/fantasia-03.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices neque. Arcu dui vivamus arcu felis bibendum. Fermentum dui faucibus in ornare. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Felis imperdiet proin fermentum leo.",
      "sizes": [
        "P",
        "M"
      ]
    },
    {
      "id": 4,
      "title": "Fantasia 4",
      "promotional_price": 50.00,
      "image": "../layout/images/fantasia-01.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices neque. Arcu dui vivamus arcu felis bibendum. Fermentum dui faucibus in ornare. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Felis imperdiet proin fermentum leo.",
      "sizes": [
        "P",
        "M",
        "G"
      ]
    }
];

function CreateModal(){  
    //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
    $(".button__cart", ".banner__show").on("click", function() {
        $(".popup-overlay, .popup-content").addClass("active");
    });
    
    //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
    $(".close, .popup-overlay").on("click", function() {
        $(".popup-overlay, .popup-content").removeClass("active");
    });    
}

function ContentBanner(){
    let show_banner = '';

    const finded_product = JSON.parse(localStorage.getItem("product"));

    debugger
    if(finded_product.promotional_price && finded_product.price)
    {
      price = `<h4 class = "old_price">De <b>R$${finded_product.price}</b> por</h4>
              <strong class = "price">R$${finded_product.promotional_price}</strong>
      `;
    }
    else if(!(finded_product.promotional_price) && finded_product.price){
      price = `
              <h5 class = "old_price">Por <b>R$${finded_product.price}</b></h5>           
            `;
    }else{
      price = `
              <h4 class = "old_price">Por <b>R$${finded_product.price}</b></h4>       
            `;
    }
    
    let shirt_sizes = '';
    finded_product.sizes.forEach((element) => {
      shirt_sizes += `
          <button class="button__size">${element}</button>
      `;
    })
    show_banner += `
      <div> 
        <img src="../../layout/images/confetti-banner.svg" class="banner__svg__top"/>     
        <img src="../${finded_product.image}" class="banner__img"/>   
              <h1>${finded_product.title}</h1>
              <h2>${finded_product.description}</h2>
              ${price}<br />
              <h3>Escolha o tamanho</h3>
              <div class="sizes">
              ${shirt_sizes}
              </div>              
              <button class="button__cart">Adicionar ao carrinho</button>
      </div>
    `;
    
    $("#banner").append(show_banner);
}

function AnotherCards(){
    let list_card = '';
    products.forEach((element, i) => {
      let price = ''
  
      if(element.promotional_price && element.price)
      {
        price = `<h4 class = "old_price">De <b>R$${element.price}</b> por</strong>
                 <strong class = "price">R$${element.promotional_price}</strong>
        `;
      }
      else if(!(element.promotional_price) && element.price){
        price = `
                <h4 class = "old_price">Por</strong>
                <strong class = "price">R$${element.price}</strong>               
              `;
      }
  
      if(i < 3){
        list_card += `
          <div id="${i+1}" class="card"> 
            <img src = "../${element.image}"  alt ="img${i+1}" /> 
              <div class="details">
                ${price}<br/>
                <button><a href="./show.html">Mais Detalhes<a/></button>
              </div>
          </div>
        `;
      }    
    });
  
    $("#container").append(list_card);  
  
}

ContentBanner();
AnotherCards();
CreateModal();
