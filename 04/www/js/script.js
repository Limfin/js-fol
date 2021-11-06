/* Undefined */
let var01; //undefined
console.log(typeof var01); //вывод типа переменной

/* Null */
let var02 = null; //null
console.log(typeof var02); //тип object
let block = document.querySelector('.block'); //переменная определена, но блока с классом 'block' не существует, поэтому значение будет null
console.log(block); //null

/* Boolean */
let var03 = true; //boolean
let var04 = false; //boolean
console.log(typeof var03, typeof var04);

/* Number */
let number = 35; //number
console.log(typeof number);
let infinity = 58 / 0; //infinity
console.log(typeof infinity); //number
console.log(infinity); //infinity
let numberError = 'фрилансер' / 3; //ошибка в вычислениях, например строка делится на число
console.log(typeof numberError); //number
console.log(numberError); //NaN

/* Bigint */
const bigInteger = 12345678901234567890123456789n;//в JS тип данных "number" не может содержать числа больше чем 9007199254740991, или меньше, чем -9007199254740991
console.log(typeof bigInteger); //bigint
console.log(bigInteger);

/* String */
let user = 'Фрилансер по жизни'; //string
console.log(typeof user);

/* Object */
let userInfo = {
	name:'Фрилансер по жизни',
	age: 25
}
console.log(typeof userInfo); //object
console.log(userInfo);

/* Symbol */
let id = Symbol('id');
console.log(typeof id); //symbol
console.log(id); //Symbol(id)

/* Преобразование типов */
/* Строковое преобразование */
let userAge = 58;
console.log(typeof userAge); //number
console.log(userAge); //58

userAge = String(userAge); //преобразование в строку
console.log(typeof userAge); //string
console.log(userAge); //58

let userTrue = true;
console.log(typeof userTrue); //boolean
console.log(userTrue); //true

userTrue = String(userTrue); //преобразование в строку
console.log(typeof userTrue); //string
console.log(userTrue); //true

/* Численное преобразование */
let userName = 'Vasya';
console.log(typeof userName); //string
console.log(userName); //Vasya

userName = Number(userName); //преобразование в число
console.log(typeof userName); //number
console.log(userName); //NaN

/* Логическое преобразование */
let userNumb = 0;
console.log(typeof userNumb); //number
console.log(userNumb); //0

userNumb = Boolean(userNumb);
console.log(typeof userNumb); //boolean
console.log(userNumb); //false



let userHeight = '145' / '10';
console.log(typeof userHeight);

