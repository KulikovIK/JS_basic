
let lastID = 1;
let step = 0;
let cart = JSON.parse(window.localStorage.getItem('userCart')) || [];

const showcaseEl = document.querySelector('.card-composition_main');
const showAdressEl = document.querySelector('.card-address');
const showCommentEl = document.querySelector('.card-comment');
const cartInfoEl = document.querySelector('#card');
const btnNext = document.querySelector('.btn-next');
const infoEl = document.querySelector('.info');
const showImg = document.querySelector('.showImg');

function Product(title, price, img) {
    this.id = lastID++;
    this.title = title;
    this.price = price;
    this.img = img;
    this.quantity = 1;
}

function getCartPrice() {
    let result = 0;
    for(let product of cart) {
        result += product.price * product.quantity;
    }

    return result;
}

function getCartQuantity() {
    return cart.reduce(function (acc, product) {
        return acc + product.quantity;
    }, 0);
}

function getCartInfo() {
    if(cart.length == 0) {
        return 'Корзина пуста';
    }
    return `В корзине ${getCartQuantity()} товаров на сумму ${getCartPrice()}$`;
}

function addQuantity (id) {
    
    cart.find(function (product) {
        product.id == id;
    })

    product.quantity++;
    return product;
}

function addQuantity (product) {
    product.quantity--;
    return product;
}

function createCartCardEl(product) {
    const cartEl = document.createElement('DIV');
    const titleEl = document.createElement('P');
    const imgEl = document.createElement('IMG');
    const priceEl = document.createElement('P');
    const quantityEl = document.createElement('P');
    const btnRemove = document.createElement('BUTTON');
    const btnAdd = document.createElement('BUTTON');
    const totalEl = document.createElement('P');

    cartEl.classList.add('card-composition_second');
    titleEl.classList.add('product-card__title');
    imgEl.classList.add('cart-card__img--small');
    priceEl.classList.add('product-card__price');
    quantityEl.classList.add ('product-card__quantity');
    btnRemove.classList.add('product-card__btn');
    btnAdd.classList.add('product-card__btn');
    totalEl.classList.add ('product-card__total');


    imgEl.setAttribute('src', product.img[0]);
    imgEl.setAttribute('data-id', product.id);
    titleEl.textContent = product.title;
    priceEl.textContent = product.price;
    quantityEl.textContent = product.quantity;
    totalEl.textContent = getProductTotal(product.id);
    cartEl.setAttribute('id', `id${product.id}`);
    btnRemove.setAttribute('data-id', product.id);
    btnRemove.textContent = '-';
    btnAdd.textContent = '+';
    btnAdd.setAttribute('data-id', product.id);

    cartEl.appendChild(titleEl);
    cartEl.appendChild(imgEl);
    cartEl.appendChild(priceEl);
    cartEl.appendChild(btnRemove);
    cartEl.appendChild(quantityEl);
    cartEl.appendChild(btnAdd);
    cartEl.appendChild(totalEl);

    return cartEl;
}

function showCartEl () {
    for (let product of cart) {
        showcaseEl.appendChild(createCartCardEl(product));
    }
}

function addQuantity (id) {
    let product = cart.find(el => el.id ==id);
    product.quantity++;
}

function remQuantity (id) {
    let product = cart.find(el => el.id ==id);
    product.quantity--;
    if (product.quantity == 0) {
        removeProduct(id);
    }
}
    

function drawCartInfo() {
    cartInfoEl.textContent = getCartInfo();
}

showcaseEl.addEventListener('click', function(e) {
    if(e.target.tagName == 'BUTTON') {
        if(e.target.textContent == '-') {
            remQuantity(e.target.dataset.id);
            drawCartInfo();
            infoEl.textContent = getCartInfo();
            showProductTotal(e.target.dataset.id);
            showProductQuantity(e.target.dataset.id);
            return;
        }
    addQuantity(e.target.dataset.id);
    drawCartInfo();
    showProductTotal(e.target.dataset.id);
    showProductQuantity(e.target.dataset.id);
    infoEl.textContent = getCartInfo();
    }
})

function getProductTotal (id) {
    const product = cart.find(el => el.id == id);
    const total = product.quantity * product.price;
    return total;
}

function showProductTotal (id) {
    const total = document.querySelector(`#id${id}`);
    const totalText = total.querySelector('.product-card__total');
    totalText.textContent = getProductTotal(id);
}

function showProductQuantity (id) {
    const quantity = document.querySelector(`#id${id}`);
    const quantityText = quantity.querySelector('.product-card__quantity');
    quantityText.textContent = cart.find(el => el.id == id).quantity;
}

function removeProduct (id) {
    const cartEl = document.querySelector(`#id${id}`);
    showcaseEl.removeChild(cartEl);
    cart.splice(cart.findIndex(el => el.id == id),1);
}

btnNext.addEventListener('click', function() {
    if (step == 0) {
        showcaseEl.classList.toggle('active');
        showAdressEl.classList.toggle('active');
        step++;
        return;
    }
    if (step == 1) {
        showAdressEl.classList.toggle('active');
        showCommentEl.classList.toggle('active');
        step++;
        return;
    }
    showcaseEl.classList.toggle('active');
    showCommentEl.classList.toggle('active');
    step = 0;
})

drawCartInfo();
infoEl.textContent = getCartInfo();
showCartEl();
