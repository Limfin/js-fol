/* Цикл WHILE */
//Синтаксис
let num = 0;
while (num < 5) {
	console.log(num);//0 1 2 3 4
	num++;
}

//Конструкция DO...WHILE
let num1 = 0;
do {
	console.log(num1);
	num1++;
} while (num1 < 5);

/* Цикл FOR */
//Синтаксис
for (let num2 = 0; num2 < 5; num2++) {
	console.log(num2); //0 1 2 3 4
}; //первый способ записать цикл
let num2 = 0;
for (;num2 < 5; num2++) {
	console.log(num2); //0 1 2 3 4
}; //второй способ записать цикл
for (let num2 = 0; num2 < 5;) {
	console.log(num2); //0 1 2 3 4
	num2++
}; //третий способ записать цикл

//Директива break
let num3 = 0;
for (; num3 < 5; num3++) {
	console.log(num3); //0 1 2
	if (num3 == 2) break; //досрочное прекращение цикла, когда num3 становится равно 2
}
console.log(`Работа окончена, num3 = ${num3}`); //Работа окончена, num3 = 2

//Директива continue
let num4 = 0;
for (; num4 < 5; num4++) {
	if (num4 == 2) continue; //пропускает значение 2 и переходит к следующей итерации цикла
	console.log(num4); //0 1 3 4
}

//Метки
firstFor: for (let num5 = 0; num5 < 5; num5++) { //firstFor это метка для первого цикла
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			break firstFor; //с помощью метки firstFor первый цикл прекращается при выполнении условия во втором цикле
		}
		console.log(size); //0 1
	}
}


//Домашка 
//#1 вывести в консоль числа от 1 до 5

let num10 = 1;
while (num10 < 6) {
	console.log('num10 = ' + num10);
	num10++
}

let num11 = 1;
do {
	console.log('num11doWhile = ' + num11);
	num11++
} while (num11 < 6);

for (let num12 = 1; num12 < 6; num12++) {
	console.log('num12for = ' + num12);
}

//#2 Последний рещультат 0, верно?
let num13 = 8;
while (num13) {//нет, последнее число 1 и после цикл остановиться, т.к. 0 это false
	console.log(num13);
	num13--;
}

//#3 Переписать на while
for (let num14 = 0; num14 < 3; num14++) {
	console.log(`Число num14 = ${num14}`);
}

let num15 = 0;
while (num15 < 3) {
	console.log(`Число num15 = ${num15}`);
	num15++;
}

//#4 Прекратить работу цикла №1 когда size равна 1
//Цикл №1
firstCicle: for (let num16 = 0; num16 < 2; num16++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstCicle;
		}
		console.log(size);
	}
}