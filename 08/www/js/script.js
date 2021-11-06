/* Объявление функции */
function showMessage() {
	console.log('Message');
}

showMessage();//вызов функции

/* Параметры (аргументы) */
function calcSumm(numOne, numTwo) {
	console.log(`Переменная numOne: ${numOne}`);
	console.log(`Переменная numTwo: ${numTwo}`);

	let numSumm = numOne + numTwo;
	console.log(`Сумма: ${numSumm}`);
}
calcSumm(1,2); // Сумма: 3

/* Функции-колбэки */
function calcSumm1(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}
function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm1(1, 5, showMoreMessage, showLessMessage); //сработает условие more() и вызовется функция showMoreMessage()

/* Возврат результата функции */
function calcSumm3(numOne, numTwo) {
	let numSumm = numOne + numTwo;

	//возврат
	return numSumm;

	//дальше код не выполняется
}
let funcResult = calcSumm3(5, 3);
console.log(`Результат функции calcSumm3: ${funcResult}`);

/* Рекурсия (функция вызывает саму себя) */
function getSumm(numOne, numTwo) {
	let numSumm = calcSumm4(numOne, numTwo);

	console.log(numSumm);
}
function calcSumm4(numOne, numTwo) {
	return numOne + numTwo;
}
getSumm(2, 4);

//Пример
function calcSumm5(numOne, numTwo) {
	let result = 1;
	//умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm5(3, 4)); //81

//Эта же функция записанная при помощи рекурсии
function calcSumm6(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm6(numOne, numTwo - 1);
	}
}
console.log(calcSumm6(3, 4)); //81

/* Функциональное выражение (Function Expression) */
let showMessage1 = function () {
	console.log('Hello!');
};
showMessage1(); //в отличие от обычного объявления функции, вызвать функцию при использовании "Функционального выражения" можно только после ее объявления

//Стрелочная функция (arrow function), болле простой способ записи функционального выражения
// let имя переменной = (параметр, ...параметр) => выражение

//Однострочная стрелочная функция
let getMessage = (text, name1) => text + ', ' + name1 + '!';
console.log(getMessage('Привет', 'Вася'));

//Многострочная стрелочная функция
let getMessage1 = (text, name1) => {
	let message = text + ', ' + name1 + '!';
	return message;
};
console.log(getMessage1('Привет', 'Федя'));

/* Планирование setTimeout setInterval */
/* Чтобы реализовать планирование существуют два метода:
1. setTimeout позволяет вызвать функцию один раз через определенный интервал времени
2. setInterval позволяет вызывать функцию регулярно, повторяя вызов через определенный интервал времени. */

// setTimeout(функция или код, задержка, параметр, ...параметр);
// setInterval(функция или код, задержка, параметр, ...параметр);

function showMessage2(text, name1) {
	console.log(`${text}, ${name1}`);
}
setTimeout(showMessage2, 3000, 'Hello', 'Vasilii'); //сообщение выведется через 3сек
// setInterval(showMessage2, 1000, 'Hello', 'Fedor'); //сообщение будет выводится каждую 1секунду

//clearTimeout остановка функции при достижении определенного условия
function showNum(num) {
	console.log(num);
	let timeId = setTimeout(showNum, 1000, ++num);
	if (num === 6) {
		clearTimeout(timeId);
	}
}
setTimeout(showNum, 1000, 1);

//clearInterval остановка функции при достижении определенного условия
let result1 = 0;
function showNum2(num) {
	result1 += num;
	console.log(result1);
	if (result1 === 5) {
		clearInterval(timeId1);
	}
}
let timeId1 = setInterval(showNum2, 1000, 1);


//Домашка
//#1 Кто попадет в консол первым Вася или Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!'); //Коля первый

//#2 Верно ли вызвана функция?
showMessage3();
function showMessage3() {
	console.log('Message3');
} //верно

//#3 Верно ли вызвана функция?
showMessage4();
let showMessage4 = function () {
	console.log('Message4');
}; // не верно, при использования функционального выражения, функция должна вызываться после ее объявления

//#4 Как решить проблему?
// 'use strict'
// if(2 > 1) {
// 	function showMessage5() {
// 		console.log('Message5');
// 	}
// }
// showMessage5(); //Error: showMessage5 is not defined
//решение в файле dz4.js
