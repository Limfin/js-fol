//Задача №1. Получить верное значение округления
let numOne = Math.round((1.005 * 100)/100 + Number.EPSILON);
console.log(numOne);

//Задача №2. Получить число 135.58px из строки
let value = "135.58px";
console.log(value);

value = parseFloat("135.58px");
console.log(value);

//Задача №3. Построить верное условное ветвление
let value1 = 58 + "Фрилансер";
if (isNaN(value1)) {
	console.log('Результат выражения NaN');
}

//Задача №4.
//Найти максимальное число из 10, 58, 39, -150, 0
console.log("максимальное число из 10, 58, 39, -150, 0 = " + Math.max(10, 58, 39, -150, 0));

//Задача №5.
//Округлить число 58.858 до 58
console.log(Math.floor(58.858));