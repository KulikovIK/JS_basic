/*1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

const chessBoard = document.querySelector(".chessBoard");

function createBoard (target) {
    const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    for (let i = 0; i <= 9; i++) {
        const div_row = document.createElement("div");
        div_row.className = 'chess-tr';
        div_row.innerHTML;
        target.appendChild(div_row);
        for (let item of letters) {
            const div_cell = document.createElement("div");
            if ((i > 0 && i < 9) && item == '') {
                div_cell.innerHTML = `${i}`;
            };
            if ((i == 0 || i == 9)) {
                div_cell.innerHTML = `${item}`;
            } 
            if (item != '' && ((i > 0 && i < 9))) {
                div_cell.className = 'cell'
            }   
            div_row.appendChild(div_cell);
        }

    }
}

createBoard(chessBoard);

/*2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

const bascetDiv = document.querySelector(".bascet");

let Basket = [
    {goodsName: 'pc', price: 1000, quantity: 1},
    {goodsName: 'keyboard', price: 150, quantity: 4},
    {goodsName: 'mouse', price: 150, quantity: 5}
];  // a, b

function totalPrice(values){
    const goodssQuantity = values.length;
    if (goodssQuantity == 0){
        return "Корзина пуста";
    };
    const total = values.reduce(function(sum, item) {return sum + item.price * item.quantity}, 0);
    return `В корзине ${goodssQuantity} товаров на сумму ${total} рублей`
} ;

bascetDiv.textContent = totalPrice(Basket);

/*3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
каталога генерируется JS.*/

let Product = [
    {goodsName: 'pc', price: 1000},
    {goodsName: 'keyboard', price: 150},
    {goodsName: 'mouse', price: 150}
];

function generateCatalog(goodsInCatalog) {
    const catalog = document.querySelector("#catalog");
    for (item of goodsInCatalog) {
        const divCard = document.createElement("div");
        divCard.className = 'goodsCard';
        catalog.appendChild(divCard);
        const goodsName = document.createElement('h2');
        const goodsPrice = document.createElement('h3');
        goodsName.textContent = item.goodsName;
        goodsPrice.textContent = item.price;
        divCard.appendChild(goodsName);
        divCard.appendChild(goodsPrice);
    };
};

generateCatalog(Product);
