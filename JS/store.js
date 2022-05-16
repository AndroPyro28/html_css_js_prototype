const mockData = [
  {
    productID: 1,
    imageUrl: "pedigree.png",
    productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    productQuantity: 1,
    productName: "Pedigree Daily Food And Chicken",
    price: 150.99,
  },
  {
    
    productID: 2,
    imageUrl: "puppy-food2.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Small wagg dog food",
    price: 120.99,
  },
  {
    productID: 3,
    imageUrl: "puppy-food1.png",
    productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    productQuantity: 1,
    productName: "Mexico Dog Food",
    price: 200.99,
  },
  {
    productID: 4,
    imageUrl: "waggFoodSet.jpg",
    productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    productQuantity: 1,
    productName: "wagg food sets",
    price: 1400.99,
  },
  {
    productID: 5,
    imageUrl: "waggFoodSet.jpg",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "wagg food sets",
    price: 1400.99,
  },
  {
    productID: 6,
    imageUrl: "puppy-food1.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Mexico Dog Food",
    price: 200.99,
  },
  {
    productID: 7,
    imageUrl: "puppy-food2.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Small wagg dog food",
    price: 120.99,
  },
  {
    productID: 8,
    imageUrl: "pedigree.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Pedigree Daily Food And Chicken",
    price: 150.99,
  },
  {
    productID: 9,
    imageUrl: "puppy-food2.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Small wagg dog food",
    price: 120.99,
  },
  {
    productID: 10,
    imageUrl: "pedigree.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Pedigree Daily Food And Chicken",
    price: 150.99,
  },
  {
    productID: 11,
    imageUrl: "puppy-food2.png",
    productDescription: "Full package dog food for your dog need",
    productQuantity: 1,
    productName: "Small wagg dog food",
    price: 120.99,
  },
];
const addToCartProduct = (addToCartBtn, data) => {
    addToCartBtn.addEventListener('click', () => {
      const myCart = JSON.parse(localStorage.getItem('myCart'));
      const cartNumberItem = document.querySelector('.cart__number__item');

      if(!myCart) {
        const cart = [];
        cart.push(data);
        cartNumberItem.textContent = cart.length;
        return localStorage.setItem('myCart', JSON.stringify(cart));
      }

      const index = myCart.findIndex((obj) => obj.productID == data.productID )
        
      if(index > -1) {
        myCart[index].productQuantity += 1;
        cartNumberItem.textContent = myCart.length;
        return localStorage.setItem('myCart', JSON.stringify(myCart))
      }
      
        myCart.push(data);
        cartNumberItem.textContent = myCart.length;

        localStorage.setItem('myCart', JSON.stringify(myCart));
      
    })
}

const addProduct = (data) => {
  const productImage = document.createElement("img");
  productImage.src = `../assets/${data.imageUrl}`;

  const productItemName = document.createElement("h3");
  productItemName.textContent = data.productName;
  productItemName.classList.add("product__item__name");
  
  const productItemDesc = document.createElement("p");
  productItemDesc.textContent = data.productDescription;
  productItemDesc.classList.add("product__item__desc");

  const productItemPrice = document.createElement("h4");
  productItemPrice.textContent = `₱ ${data.price}`;
  productItemPrice.classList.add("product__item__price");

  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid");
  cartIcon.classList.add("fa-cart-plus");

  const addToCart = document.createElement("span");
  const text = document.createElement("span");
  addToCart.classList.add("add__to__cart");
  text.textContent = "Add To Cart";
  text.style.marginLeft = "5px";
  addToCart.appendChild(cartIcon);
  addToCart.appendChild(text);
  addToCartProduct(addToCart, data);

  const productItemContainer = document.createElement("div");
  productItemContainer.classList.add("product__item");

  productItemContainer.appendChild(productImage);
  productItemContainer.appendChild(productItemName);
  productItemContainer.appendChild(productItemDesc);

  productItemContainer.appendChild(productItemPrice);
  productItemContainer.appendChild(addToCart);
  productsContainer.appendChild(productItemContainer);

  return Math.ceil(mockData.length / maxPerPage);
};
let pageNumber = 0;
const activePageDisplay = document.querySelector('.activePage');
const maxPageDisplay = document.querySelector('.maxPage');
window.onload = () => {
  mockData.slice(pageVisited, pageVisited + maxPerPage).forEach((data) => {
    pageNumber = addProduct(data);
    activePageDisplay.textContent = activePage + 1;
    maxPageDisplay.textContent = pageNumber
  });
}

const productsContainer = document.querySelector(".products__container");
let activePage = 0;
let maxPerPage = 5;
let pageVisited = activePage * maxPerPage;
const prev = document.querySelector('.left')
const next = document.querySelector('.right')

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


prev.addEventListener('click', () => {
  if(activePage > 0) {
    removeAllChildNodes(productsContainer);
    activePage-=1;
    pageVisited = activePage * maxPerPage;
    mockData.slice(pageVisited, pageVisited + maxPerPage).forEach((data) => {
      pageNumber = addProduct(data);
    activePageDisplay.textContent = activePage + 1;
    maxPageDisplay.textContent = pageNumber
    });
  }
})

next.addEventListener('click', () => {
  if(activePage < pageNumber -1) {
    removeAllChildNodes(productsContainer);  
    activePage+=1;
    pageVisited = activePage * maxPerPage;
    mockData.slice(pageVisited, pageVisited + maxPerPage).forEach((data) => {
    pageNumber = addProduct(data);
    activePageDisplay.textContent = activePage + 1;
    maxPageDisplay.textContent = pageNumber
  });
  }
});






