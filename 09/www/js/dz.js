//#1 верна ли запись
const userInfo30 = { //неверный синтаксии вместо "const" должно бить "let"
	name: 'Fedor',
	age: 30,
}
console.log(userInfo30);


//#2 что будет в консоли?
let userInfo31 = {
	name: 'Fedor',
	age: 30,
	'58': 'Значение свойства',
}
console.log(userInfo31[58]); //Значение свойства


//#3 что будет в консоли?
let userInfo32 = {
	name: 'Fedor',
	age: 30,
}
let user30 = userInfo32;
user30.age = 45;

console.log(userInfo32.age); //45


//#4 что будет в консоли?
let userInfo33 = {
	name: 'Fedor',
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user31 = userInfo33;
userInfo33 = null;
user31.showInfo(); //Fedor


//#5 что будет в консоли?
let userInfo34 = {
	name: 'Fedor',
	age: 30,
}
for (const key in userInfo34) {
	const value = userInfo34[key];
	console.log(value); //Fedor, 30
}


//#6 что будет в консоли?
let userInfo35 = {
	name: 'Fedor',
	age: 30,
	address: {
		city: 'Samara',
	},
}
for (const key in userInfo35.address) {
	console.log(userInfo35.address[key]); //Samara
}


//#7 верна ли запись
const userInfo36 = {
	name: 'Fedor',
	age: 30,
	'likes js': true,
}
//console.log(userInfo36.'likes js'); не верно 
console.log(userInfo36['likes js']); //так должно быть

//#8 верна ли запись
/* 
1. Создайте пустой объект userInfo37.
2. Добавьте свойство name со значение Petr
3. Добавьте свойство age со значением 30.
4. Измените значение свойства name на Lena.
5. Удалите свойство name из объекта
*/

//1
let userInfo37 = {}
console.log(userInfo37);

//2
userInfo37.name = 'Petr';
console.log(userInfo37);

//3
userInfo37.age = 30;
console.log(userInfo37);

//4
userInfo37.name = 'Lena';
console.log(userInfo37);

//5
delete userInfo37.name
console.log(userInfo37);

























