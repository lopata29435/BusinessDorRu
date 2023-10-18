// обычные переменные
let number1 = 5;
console.log(number1);



// константные переменные
const number2 = 6;
number2 = number2 + 1;
console.log(number2); // ошибка



// объявление с помощью var
// нелогичное поведение
console.log('Объявление с помощью var', name);
var name = 'Ivan';

console.log('Объявление с помощью let', surname);
let surname = 'Petrov';



// область видимости
{
	let name = 'Ivan'
	}
console.log(name)

// головоломка от саши фефелова
let s;
const a = "Tochki vajni!!!!" + s;
[5].forEach(n => console.log(n));


// Типы данных
let number = 4.8; //целые и дробные числа

const personName = 'Ivan'; // подходят любые кавычки ("", ``)

console.log(`Hello, ${personName}!`); // интерполяция

const bool = false;

let und;
console.log(und); // получаем undefined - что-то существует, но у него нет конкретного типа

console.log(a); // - несуществующая переменная => получаем null



// объекты
const obj = { // объект, а внутри свойства и методы (действия)
	name: 'Ivan',
	age: 39,
	isMarried: false,
	sayHello: function () {
		console.log('Hello!');
	}
}
obj.sayHello();
console.log(obj.name) // получаем доступ к свойству объекта
console.log(obj['name']) // the same




//массивы
let arr = ['Semen', 'Sanya', 'Yarik', 'Ivan'];
let arr2 = ['Ivan', 11, {}, []]; // тоже допустимо
console.log(arr2[0]); // нумерация начинается с 0



// Динамическая типизация
console.log(typeof(toString(3)));
//в строку
const fontSize = 20 + 'px';
console.log(typeof(fontSize)); // конкатенация строк
// в число
console.log(typeof(Number('11')));
//удобный вариант
console.log(typeof(+'11')); // унарный плюс

const flag = ''; // 0, null, undefined и что-то с true
if (flag){
	console.log('true');
} else {
	console.log('false');
}



// функции
function showNum (value) {
	return 5*value
}
console.log(showNum(3))


function showMessage () {
	console.log('Im function')
}
showMessage()

// стрелочные функции 
const calc1 = (a, b) => {
	return a + b;
}
const calc2 = (a, b) => a + b //сокращенный вариант
const calc3 = a => a + 1 // если переменная одна

	

	