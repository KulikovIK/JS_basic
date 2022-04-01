/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.*/

let number = 456;

function numberConverter(num, result={}) {
    if (num < 1000){
        let dict = ['units', 'dozens', 'hundreds'];
        for (const item of dict) {
            if (num == 0) break;
            result[item] = num % 10;
            num = parseInt(num / 10);
        }
    } else {
        console.log('Число не должно превышать 999');
    }
    return result;
}

console.log(numberConverter(number));

/* 2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

/*Постарался учесть замечания с прошлого ДЗ*/

let basket = [
    {goodsName: 'pc', price: 1000},
    {goodsName: 'keyboard', price: 150},
    {goodsName: 'mouse', price: 150}
];  // a, b

function totalPrice(values){
    return values.reduce(function(sum, item) {return sum + item.price}, 0);
}   // c

let total = totalPrice(basket);

console.log (total);
