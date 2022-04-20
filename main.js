/* 1. Продумать, где можно применить замыкания для практикума из седьмого урока.*/

/*Примерами функций, где вполне могули бы подойти замыкания будут*/

function getCartPrice() {
    let result = 0;
    for(let product of cart) {
        result += product.price * product.quantity;
    }

    return result;
}

// или

function addQuantity (product) {
    product.quantity--;
    return product;
}

// или

function showCartEl () {
    for (let product of cart) {
        showcaseEl.appendChild(createCartCardEl(product));
    }
}

//или

function Product(title, price, img) {
    this.id = lastID++;
    this.title = title;
    this.price = price;
    this.img = img;
    this.quantity = 1;
}

/* Но стоит ли это делать везде - думаю вопрос открытый.*/

/*2. Не выполняя код, ответить, что выведет браузер и почему: */

if (!("a" in window)) {
    var a = 1;
    }
alert(a);

/*Результат 'undefined', так как переменная "а" определена через var, то есть вспылает
и интерпретатор знает о ней, затем оператор IF проводит проверку условия. Так как в объекте
window уже присутствует переменная "а", то условие принимает значение false и присвоения 
значения не выполняется.*/

var b = function a(x) {
    x && a(--x);
    };
alert(a);

/*Результат - ошибка. Интерпретатор не знает 'а'. Такой переменной не определено, а 
функция 'а' записана в переменной б и пониматься будет как б()*/

function a(x) {
    return x * 2;
    }
var a;
alert(a);

/*Результат

function a(x) {
    return x * 2;
    }

По сути правильный код из предыдущего примера. Разве что читабельнее было бы 
var a  = function a(x)...*/

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
    }
b(1, 2, 3);

/*Результат - 10. Оператор arguments запрашивает 3-й оргумент функции и присваивает ему 
новое значение. По сравнению с первой задачкой как-то даже неловко :)*/

function a() {
    alert(this);
    }
a.call(null);

/*Результат - window. На сколько я понял механизм такой:
- выполни функцию а, при этом в качестве this используй null, то есть ничего;
- данный запрос равносилен a.call() или а(); 
- так как функция вызывается из объекта window, то this, согласно контексту и будет window*/

/*
Не буду скрывать, подглябывал в браузере за работой функций, но не сразу понял как происходит
работа только в первой и последней функции. В первой ключевой момент - это var (был бы let
результатом была бы ошибка, что 'a' не определена), а в последней задачке связка call(null) по
началу смутила, но немного погуглив решение было найдено*/