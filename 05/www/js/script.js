let x;

/* Сложение + */
x = 5 + 8;
console.log(`Результат сложения: ${x}`); //Результат сложения: 13

/* Вычитание */
x = 9 - 5;
console.log(`Результат вычитания: ${x}`); //Результат вычитания: 4

/* Умножение */
x = 2 * 3;
console.log(`Результат умножение: ${x}`); //Результат умножение: 6

/* Деление */
x = 10 / 2;
console.log(`Результат деления: ${x}`); //Результат деления: 5

/* Взятие остатка от деления % */
x = 11 % 3;
console.log(`Результат взятие остатка от деления: ${x}`); //Результат взятие остатка от деления: 2
//Проверка: 11=3*3(неполное частное от деления)+2(остаток)

/* Возведение в степень ** */
x = 5 ** 3;
console.log(`Результат возведение в степень: ${x}`); //Результат возведение в степень: 125
//Число 5 умноженное на себя 3 раза. 5*5*5 = 125


/* Логические операторы */
/* Оператор || (ИЛИ) */

//Булевые значения
console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true
console.log(false || false); //false

//Разные типы
//Возвращает первое истинное значение или последнее ложное
console.log(1 || 0); //true - 1
console.log(true || 'Фрилансер'); //true - true
console.log(null || 58); //true - 58
console.log(null || 'фрилансер' || 0); //true - фрилансер
console.log(undefined || '' || null || 0); //fasle - 0

//Присвоение значения в переменную
let userName = '';
let userNickName = 'Фрилансер';
let user = userName || userNickName || 'Без имени';
console.log(user); //Фрилансер

//Сокращенное вычисление. Условие
let admins = 0;
let users = 5;
admins > users || users++; //первое значение будет ложно, поэтому увеличиваем второе на 1
console.log(users); //6

/* Оператор && (И) */
//Булевые значения
console.log(true || false); //false
console.log(false || true); //false
console.log(true || true); //true
console.log(false || false); //false


//Разные типы
//Возвращает последнее истинное значение или первое ложное
console.log('Фрилансер' && 0 && 2 && 3); //false - 0
console.log(1 && 2 && null && 3); //fasle - null
console.log('15' && '42'); //true - 42

//Приоритет оператора &&(И) больше чем оператора ||(ИЛИ)
console.log(1 && 0 || 2 && 1);//1

/* Оператор ! (НЕ) */
//Булевые значения
console.log(!true); //false

//Разные типы 
console.log(!null); //true
console.log(!1); //false
console.log(!''); //true
console.log(!'фрилансер'); //false

//У оператора !(НЕ) наивысший приоритет и он выполнится первее &&(И) и ||(ИЛИ)
console.log(!true && 58 || 18 && !1); //false


/* Оператор сравнения с null (??) */
//Оператор ?? возвращает первый аргумент, если он не null / undefined,  если же первый аргумент равен null / undefined, то вернется второй
let name1;
console.log(name1 ?? 'Без имени'); //Без имени

let name2 = 0;
console.log(name2 ?? 'Без имени');

