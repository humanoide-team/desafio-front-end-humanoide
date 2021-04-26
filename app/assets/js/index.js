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

let id_card = 1;

function  HandleCardShowedProduct(){
  $(".card").hover(
    function() {
      $(this).find(".details").show(150);
    }, function() {
      $(this).find(".details").hide(150);
    }
  );
}

function CreateCards(){
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

function CreateBanner(){
  
  $("a", "button").on("click", event => {    
    
    id_card = Number($(event.target).parents(".card").attr("id"));
    const finded_product = products.find(product => product.id == id_card);

    localStorage.setItem("product", JSON.stringify(finded_product));

  }); 
  
}

CreateCards();
HandleCardShowedProduct();
CreateBanner();


