/* Синтаксис */
let message = 'Привет, фрилансер!';

if (2 > 1) {
	console.log(message); //выведется сообщение "Привет, фрилансер!", т.к. условие true
}

let first = 5;
let second = 10;
if (first === second) {
	console.log(message); //ничего не выведется, т.к. условие false
}

/* Блоки ELSE и ELSE IF */
let number = 5;

if (number > 50) {
	console.log('5 больше 50');
} else if (number > 30) {
	console.log ('5 больше 30');
} else if (number > 10) {
	console.log('5 больше 10');
} else if (number > 1) {
	console.log('5 больше 1');
} else {
	console.log('Условие не выполнено');
}

/* Условный оператор "?" */
let message1 = 'Hello';
let messageEnd;

if (5 > 1) {
	messageEnd = ', Вася!';
} else {
	messageEnd = ', Оля!';
}
message1 += messageEnd;
console.log(message1);

let message2 = 'Hello';
messageEnd = (5 > 1) ? ', Вася!' : ', Оля!'; //тоже самое условие только записанное с помощью условного оператора "?"
message2 += messageEnd;
console.log(message1);


//Домашка

if (1 === '1') {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}//Ложь!

if (5 == '5') {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}//Истина!

let message5 = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message5)//Истина!

if (0) {
	console.log('Ложь!');
} else if (' ') {
	console.log('Истина!');
}//Истина!