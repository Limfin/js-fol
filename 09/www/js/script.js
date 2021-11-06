/* Синтаксис */
let userInfo1 = new Object(); //синтаксис "конструктора объекта"
let userInfo2 = {}; //синтаксис "литерала объекта"

//Свойства объектов. Ключ + значение
let userInfo = {
	name: 'Vasilii', //свойство объекта
	age: 30, //последняя (висячая) запятая
};

console.log(userInfo); //вызов всего объект
console.log(userInfo.name); //вызов значения объекта

//Имена свойств

//Имя из двух и больше слов
let userInfo3 = {
	name: 'Fedor',
	age: 30,
	'likes JS': true,
};
console.log(userInfo3.name);
console.log(userInfo3['likes JS']); //true

//Вычисляемое либо передаваемое имя

//Вычисляемое имя
let firstPart = 'likes';
let userInfo4 = {
	name: 'Fedor',
	age: 30,
	[firstPart + ' JS']: true,
};
console.log(userInfo4['likes JS']); //true

//Передаем имя
let firstPart2 = 'likes';
let userInfo5 = {
	name: 'Fedor',
	age: 30,
	[firstPart2]: true,
};
console.log(userInfo5[firstPart2]); //true

//Зарезервированные слова в именах
let userInfo6 = {
	let: 'Fedor', //можно использовать зарезервированные слова в именах свойств объекта
	for: 30,
};
console.log(userInfo6.let); //Fedor
console.log(userInfo6.for); //30


/* Тип данных Symbol */

//Создаем символ id с описанием (именем) "id"
let id = Symbol('id');
let userInfo7 = {
	name: 'Fedor',
	age: 30,
	[id]: 'Некое значение',
};
console.log(userInfo7);//{name: "Fedor", age: 30, Symbol(id): "Некое значение"}

//Основное применение символов:
//1. "Скрытые" свойства объектов
//Символьное свойтсво не появится в for..in
//2. Использование системных символов
//Symbol.iterator, Symbol.toPrimitive и т.д.

//Вложенность
let userInfo8 = {
	name: 'Fedor',
	age:30,
	address: {
		city: 'Ufa',
		street: 'Lenina',
	},
};
console.log(userInfo8);
console.log(userInfo8.address); //{city: "Ufa", street: "Lenina"}
console.log(userInfo8.address.city); //Ufa

//Свойство из переменной
function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		//...другие свойства
	};
}
let user = makeUserInfo('Fedor', 40);
console.log(user); //{name: "Fedor", age: 40}


/* Изменение объекта */
//Добавление свойства
let userInfo9 = {
	name: 'Fedor',
};
console.log(userInfo9); //{name: "Fedor"}

userInfo9.age = 30;
console.log(userInfo9); //{name: "Fedor", age: 30}

userInfo9['likes JS'] = true;
console.log(userInfo9); //{name: "Fedor", age: 30, likes JS: true}

userInfo9.address = {
	city: 'Moscow',
	street: 'Lenina',
};
console.log(userInfo9); //{name: "Fedor", age: 30, likes JS: true, address: {…}}

//Удаление свойства
let userInfo10 = {
	name: 'Fedor',
	age: 30,
	'likes JS': true,
};
console.log(userInfo10); //{name: "Fedor", age: 30, likes JS: true}

delete userInfo10.age;
console.log(userInfo10); //{name: "Fedor", likes JS: true}

delete userInfo10['likes JS'];
console.log(userInfo10); //{name: "Fedor"}

//Изменение свойства
let userInfo11 = {
	name: 'Fedor',
	age: 30,
};
console.log(userInfo11); //{name: "Fedor", age: 30}

userInfo11.age = 18
console.log(userInfo11); //{name: "Fedor", age: 18}

//Копирование объекта
//При копировании обекта в другую переменную сам объект не дублируется, а копируется только ссылка на него
let userInfo12 = {
	name: 'Fedor',
	age: 30,
};
console.log(userInfo12); //{name: "Fedor", age: 30}

let user1 = userInfo12;
console.log(user1); //{name: "Fedor", age: 30}

user1.age = 18;
console.log(userInfo12); //{name: "Fedor", age: 18}

//Дублирование объекта
//Синтаксис
//Object.assign(куда(объект), что(свойство №1), что(свойство №2), ...);

let userInfo13 = {
	name: 'Fedor',
	age: 30,
}

let user2 = Object.assign({}, userInfo13);

user2.age = 18;
console.log(userInfo13); //{name: "Fedor", age: 30}
console.log(user2); //{name: "Fedor", age: 18}


/* Проверка существования свойства */
let userInfo14 = {
	name: 'Fedor',
	age: 30,
}

if (userInfo14.age) { //true или false, если будет undefined, то вернется false
	console.log(userInfo14.age);
}

//Опциональная цепочка
let userInfo15 = {
	name: 'Fedor',
	age: 30,
	address: {
		city: 'Moscow',
		street: 'Lenina',
	}
}
console.log(userInfo15?.address?.street); //если какого-то свойства не будет, то в консоли выведется undefined

//Оператор 'in'
let userInfo16 = {
	name: 'Fedor',
	age: 30,
	address: {
		city: 'Moscow',
		street: 'Lenina',
	}
}
if ('name' in userInfo16) {
	console.log(userInfo16.name);
}

//в большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//но есть особый случай, когда свойство существует, но содержит значение undefined.
//В этом случае необходимо использовать "in"

let userInfo17 = {
	name: undefined,
}
if (userInfo17.name) { //false вернется
	console.log(userInfo17.name) //в консоль ничего не выведется
}

if ('name' in userInfo17) { //true вернется
	console.log(userInfo17.name) //в консоль выведется undefined
}


/* Цикл for...in */
// for (let key in object) {
	//тело цикла выполняется для каждого свойства объекта
// }

let userInfo18 = {
	name: 'Fedor',
	age: 30,
	address: {
		city: 'Moscow',
		street: 'Lenina',
	}
}

for (let key in userInfo18) {
	//ключи
	console.log(key); //name, age, address
	//значения ключей
	console.log(userInfo18[key]); //Fedor, 30, Object {}
}

for (let key in userInfo18.address) {
	//ключи
	console.log(key); //city, street
	//значения ключей
	console.log(userInfo18.address[key]); //Moscow, Lenina
}


/* Методы объекта */

let userInfo19 = {
	name: 'Fedor',
	age: 30,
	address: {
		city: 'Moscow',
		street: 'Lenina',
	},
	showInfo: function () {
		console.log(`${userInfo19.name}, ${userInfo19.age} лет. Адрес: г.${userInfo19.address.city}`)
	}
}
userInfo19.showInfo(); //Fedor, 30 лет. Адрес: г.Moscow

//Использование "this"
let userInfo20 = {
	name: 'Fedor',
	age: 40,
	address: {
		city: 'Ufa',
		street: 'Lenina',
	},
	showInfo: function () {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}`)
	}
}
userInfo20.showInfo(); //Fedor, 40 лет. Адрес: г.Ufa

/* Функция-конструктор */
/* 
Функции-конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции-конструктора должно начинаться с большой буквы.
2. Функция-конструктор должна вызываться при помощи оператора "new"
*/
function UserInfo(name) {
	//this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	//return this; Возвращается объект (неявно)
}
console.log(new UserInfo('Petr')); //UserInfo {name: "Petr", age: 30}
console.log(new UserInfo('Lena')); //UserInfo {name: "Lena", age: 30}














