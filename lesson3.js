/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

let number = 0;

while (number <= 100) {
    if (number <= 2) {
        console.log(number++)
    }
    else {

        for (let i = 2; i <= number; i++) {

            if (i == number) {
                console.log(number++);
                break;
            }
            else if (number % i === 0) {
                ++number;
                break;
            }
        }
    }
}

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

let basket = {pc: 500, keyboard: 100};  // a

function countBasketPrice(data) {       // b
    let summ = 0;
    for (key in data) {
        summ += data[key];
    }
    return summ;
}

function countBasketPriceNew(data) {    // b
    let summ = 0;
    for (let key of Object.keys(data)) {
        summ += data[key];
    }
    return summ;
}

/* 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это
должно так:
for(...){// здесь пусто}*/

for (let i = 0; i < 10; console.log(i++));

/*5.* Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx
xxxx
xxxxx*/

for (let i = '*'; i.length <= 20; i += '*'){
    console.log(i);
}
