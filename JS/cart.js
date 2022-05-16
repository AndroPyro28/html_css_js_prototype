
const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  const checkProduct = (checkbtn, data) => {
    checkbtn.addEventListener('click', () => {
        if(checkbtn.checked) {

            getTotalPrice()
        }
    })
  }

const displayProduct = (data) => {

const productListContainer = document.querySelector('.product__list__container')
const productItemContainer = document.createElement('div');
productItemContainer.classList.add('product__item__container');

// for checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    // checkProduct(checkbox, data);
    productItemContainer.appendChild(checkbox);
// for product image
const productImg = document.createElement('img');
productImg.classList.add('product__image');
productImg.src = `../assets/${data.imageUrl}`;
productItemContainer.appendChild(productImg);

// for product name
const productName = document.createElement('div');
productName.classList.add('product__name');
const h5 = document.createElement('h5');
const h6 = document.createElement('h6');
h5.textContent = data.productName;
h6.textContent = data.productDescription;
productName.appendChild(h5);
productName.appendChild(h6);
productItemContainer.appendChild(productName);

// for product quantity

const productQuantity = document.createElement('div');
const btnDecremeant = document.createElement('button');
const btnIncremeant = document.createElement('button');
incremeantDecremeant(btnDecremeant, data)
incremeantDecremeant(btnIncremeant, data)
const label = document.createElement('label');

label.textContent = data.productQuantity
btnDecremeant.classList.add('decremeant')
btnDecremeant.textContent = "-";
btnIncremeant.classList.add('incremeant');
btnIncremeant.textContent = "+";
productQuantity.classList.add('product__quantity')

productQuantity.appendChild(btnDecremeant)
productQuantity.appendChild(label);
productQuantity.appendChild(btnIncremeant)
productItemContainer.appendChild(productQuantity);

// for product price

const productPrice = document.createElement('h5');
productPrice.classList.add('product__price');
const price = data.price * data.productQuantity
productPrice.textContent = `₱ ${price.toFixed(2)}`;
productItemContainer.appendChild(productPrice);

// icon add to shop
const addToShopIcon = document.createElement('i');
addToShopIcon.classList.add('fa-solid');
addToShopIcon.classList.add('fa-trash-can');
addToShopIcon.classList.add('addToShop');
removeProduct(addToShopIcon, data);
productItemContainer.appendChild(addToShopIcon);
productListContainer.appendChild(productItemContainer);
}

const getTotalPrice = () => {
    const myCart = JSON.parse(localStorage.getItem('myCart'))
    const chechOutPrice = document.querySelector('.check__out__price');
    const subtotalPrice = document.querySelector('.subtotalPrice');
    const totalAmount = document.querySelector('.totalAmount');
    const shippingPrice = document.querySelector('.shippingPrice');
    const checkboxes = document.querySelectorAll('.checkbox');
    
    const totalPrice = myCart.reduce(
        (totalPrice, product) => totalPrice + product.price * product.productQuantity, 0);

        const shippingFee = totalPrice * 0.05
        const totalFee = totalPrice + shippingFee
        subtotalPrice.textContent = `₱ ${totalPrice.toFixed(2)}`
        shippingPrice.textContent = `₱ ${shippingFee.toFixed(2)}`
        totalAmount.textContent = `₱ ${totalFee.toFixed(2)}`
        chechOutPrice.textContent = `₱ ${totalFee.toFixed(2)}`

}


const removeProduct = (button, data) => {
    button.addEventListener('click', () => {
    const productListContainer = document.querySelector('.product__list__container')
        let myCart = JSON.parse(localStorage.getItem('myCart'));
        const productIndex = myCart.findIndex((product) => product.productID == data.productID);
        myCart = myCart.filter((product, index) => index != productIndex);
        localStorage.setItem('myCart',JSON.stringify(myCart));
        removeAllChildNodes(productListContainer);

        if(myCart.length > 0) {
        getTotalPrice()
        return myCart.map(product => displayProduct(product));
        } else {
            getTotalPrice()
            const h2 = document.createElement('h2');
            h2.textContent = '*No product in cart yet*';
            return productListContainer.appendChild(h2);
        }
    })
}

const incremeantDecremeant = (button, data) => {
    button.addEventListener('click', () => {
    let myCart = JSON.parse(localStorage.getItem('myCart'));
    const productIndex = myCart.findIndex((product) => product.productID == data.productID)
    const productListContainer = document.querySelector('.product__list__container')

        if(button.innerText == "-"){
            data.productQuantity -= 1;
        }
        if(button.innerText == "+") {
            data.productQuantity += 1;
        }
        myCart[productIndex] = data;

        myCart = myCart.filter(product => product.productQuantity > 0)
        localStorage.setItem('myCart',JSON.stringify(myCart));
        removeAllChildNodes(productListContainer);
        getTotalPrice()
        return myCart.map(product => displayProduct(product));

    })
}

window.addEventListener('load', (event) => {
    const myCart = JSON.parse(localStorage.getItem('myCart'));
    const productListContainer = document.querySelector('.product__list__container')

    removeAllChildNodes(productListContainer);
    if (myCart.length > 0) {
        myCart.map(product => displayProduct(product));
        getTotalPrice()

        // someFunc()
    }
    else {
        const h2 = document.createElement('h2');
        h2.textContent = '*No product in cart yet*';
        productListContainer.appendChild(h2);
        getTotalPrice()

    }
  });

//   const someFunc = () => {
//     const productItemContainer = document.querySelectorAll('.product__item__container')
//     console.log(productItemContainer[0].childNodes[0].checked)
//   }

  const backBtn = document.querySelector('.backBtn');

  backBtn.addEventListener('click', () => {
      window.history.back();
  })