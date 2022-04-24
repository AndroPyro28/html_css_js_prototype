const mockData = [
  {
    imageUrl: "pedigree.png",
    productName: "Pedigree Daily Food And Chicken",
    price: 150.99,
  },
  {
    imageUrl: "puppy-food2.png",
    productName: "Small wagg dog food",
    price: 120.99,
  },
  {
    imageUrl: "puppy-food1.png",
    productName: "Mexico Dog Food",
    price: 200.99,
  },
  {
    imageUrl: "waggFoodSet.jpg",
    productName: "wagg food sets",
    price: 1400.99,
  },
  {
    imageUrl: "waggFoodSet.jpg",
    productName: "wagg food sets",
    price: 1400.99,
  },
  {
    imageUrl: "puppy-food1.png",
    productName: "Mexico Dog Food",
    price: 200.99,
  },
  {
    imageUrl: "puppy-food2.png",
    productName: "Small wagg dog food",
    price: 120.99,
  },
  {
    imageUrl: "pedigree.png",
    productName: "Pedigree Daily Food And Chicken",
    price: 150.99,
  },
  {
    imageUrl: "puppy-food2.png",
    productName: "Small wagg dog food",
    price: 120.99,
  },
  {
    imageUrl: "pedigree.png",
    productName: "Pedigree Daily Food And Chicken",
    price: 150.99,
  },
  {
    imageUrl: "puppy-food2.png",
    productName: "Small wagg dog food",
    price: 120.99,
  },

];

const addProduct = (data) => {
  const productImage = document.createElement("img");
  productImage.src = `../assets/${data.imageUrl}`;

  const productItemName = document.createElement("h3");
  productItemName.textContent = data.productName;
  productItemName.classList.add("product__item__name");

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

  const productItemContainer = document.createElement("div");
  productItemContainer.classList.add("product__item");

  productItemContainer.appendChild(productImage);
  productItemContainer.appendChild(productItemName);
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
})


