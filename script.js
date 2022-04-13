/*1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без
перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего
вида.*/

function totalPrice(values){
    const goodssQuantity = values.length;
    if (goodssQuantity == 0){
        return "Корзина пуста";
    };
    const total = values.reduce(function(sum, item) {return sum + item.price * item.quantity}, 0);
    return `В корзине ${goodssQuantity} товаров на сумму ${total} рублей`
};

const bascetDiv = document.querySelector(".bascet");

let basket = [
    {goodsName: 'pc', price: 1000, quantity: 1},
    {goodsName: 'keyboard', price: 150, quantity: 4},
    {goodsName: 'mouse', price: 150, quantity: 5}
];

bascetDiv.textContent = totalPrice(basket);

let products = [
    {goodsName: 'pc', price: 1000, info: ['./img/pc1.png', './img/pc2.png']},
    {goodsName: 'keyboard', price: 150, info: ['./img/kb1.png', './img/kb2.jpg']},
    {goodsName: 'mouse', price: 150, info: ['./img/mouse1.jpeg', './img/mouse2.png']},
    {goodsName: 'lamp', price: 70, info: ['./img/lamp1.jpeg', './img/lamp2.jpg']}
];

function generateCatalog(goodsInCatalog) {
    const catalog = document.querySelector(".catalog");
    for (let item of goodsInCatalog) {

        const divCard = document.createElement("div");
        divCard.className = 'goodsCard';
        catalog.appendChild(divCard);

        const productName = document.createElement('h2');
        const productPrice = document.createElement('h3');
        const productBuy = document.createElement("button");

        productName.textContent = item.goodsName;
        productPrice.textContent = item.price;
        productBuy.textContent = 'Купить';

        productBuy.addEventListener('click', (e) => {
            
            for (let goodsItem of basket) {
                if (goodsItem.goodsName == productName.textContent) {
                    goodsItem.quantity ++;
                    bascetDiv.textContent = totalPrice(basket);
                    return basket;
                };
            }; 

            basket.push ({
                goodsName: productName.textContent, 
                price: parseInt(productPrice.textContent), 
                quantity: 1});
            
            bascetDiv.textContent = totalPrice(basket);
            return basket;
        });

        divCard.appendChild(productName);
        divCard.appendChild(productPrice);
        divCard.appendChild(productBuy);
    };
};

generateCatalog(products);
