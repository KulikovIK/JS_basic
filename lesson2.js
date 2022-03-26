/*1. Почему код дает именно такие результаты?*/

var a = 1, b = 1, c, d;
c = ++a; alert(c);      // 2 - так как сначала производится инкрементация "а" -> 2, а потом присвоение результата "с" -> 2
d = b++; alert(d);      // 1 - так как сначала производится присвоение "d" -> 1 значения "b" -> 2, а затем инкрементация "b" -> 2
c = (2+ ++a); alert(c); // 5 - так как сначала производится инкрементация "а" -> 3, а потом присвоение результата "с" -> (2 + 3) = 5
d = (2+ b++); alert(d); // 4 - так как сначала производится присвоение "d" -> (2 + 2) = 4, а затем инкрементация "b" -> 3
alert(a);               // 3
alert(b);               // 3

/*2. Чему будет равен x?*/

var a = 2;
var x = 1 + (a *= 2);   // 5 - в начале происходит переопределение "а" -> (2 * 2), а затем "x" -> (1 + 4) = 5

/*3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
    o если a и b положительные, вывести их разность;
    o если а и b отрицательные, вывести их произведение;
    o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/

var a = 1, b = 6;

if ((a >= 0) && (b >= 0)) {
    console.log(a - b);
} else if ((a < 0) && (b < 0)) {
    console.log(a * b)
} else {
    console.log(a + b);
}

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.*/

let a = 8;

switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
    default:
        break;
}

/*5. Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.*/

function ownSumm(a, b) {
    return a + b;
}

function ownDiff(a, b) {
    return a - b;
}

function ownMul(a, b) {
    return a * b;
}

function ownDiv(a, b) {
    return a / b;
}

/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return ownSumm(arg1, arg2);
            break;
        case "-":
            return ownDiff(arg1, arg2);
            break;
        case "*":
            return ownMul(arg1, arg2);
            break;
        case "/":
            return ownDiv(arg1, arg2);
            break;
        default:
            return "Что-то пошло не так! Введен неизвестный оператор";
            break;
    }
}

/*7. * Сравнить null и 0. Объяснить результат.*/


console.log(null == 0); // false
console.log(null > 0);  // false
console.log(null < 0);  // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null != 0); // true

/*Первые три ответа выдаются в результате работы "абстрактного алгоритма сравнения для равенств" (см. https://javascript.ru/ecma/part11#a-11.9.3) 
и "абстрактного алгоритма сравнения" (см. https://javascript.ru/ecma/part11#a-11.8.5).
Первый результат обусловлен результатом выполнения 1-14-22 шага алгоритма 11.9.3, а второй и третий - 1-2-4-5-8 алгоритма 11.8.5.
Последующие результаты удивили, но согласно спецификации на операторы все верно
"<=" (см. https://javascript.ru/ecma/part11#a-11.8.3) на шаге 5 null > 0 -> false, значит на 6 шаге возвращаем true
">=" (см. https://javascript.ru/ecma/part11#a-11.8.4) на шаге 5 null < 0 -> false, значит на 6 шаге возвращаем true
"!=" (см. https://javascript.ru/ecma/part11#a-11.9.2) на шаге 5 null == 0 -> false, значит на 6 шаге  возвращаем true
*/

/*8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень.*/

function power (val, pow) {
    if (pow == 1) {
        return val;
    }
    return power (val, pow - 1) * val;
}

console.log(power(2, 2))    // результат 4
