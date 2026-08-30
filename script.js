// ЗАДАНИЕ 1

let age = 23;
const name = "Ерназар";

console.log("Возраст:", age);
console.log("Имя:", name);

age = 24;

console.log("Новый возраст:", age);

// name = "Али"; // Ошибка, const нельзя изменить


// ЗАДАНИЕ 2

var city = "Алматы";

console.log("Город:", city);


// ЗАДАНИЕ 3

let number = 23;
let string = "Ерназар";
let boolean = true;
let empty = null;
let notDefined = undefined;
let notNumber = NaN;

console.log(number, typeof number);
console.log(string, typeof string);
console.log(boolean, typeof boolean);
console.log(empty, typeof empty);
console.log(notDefined, typeof notDefined);
console.log(notNumber, typeof notNumber);


// ЗАДАНИЕ 4

let text = "23";
let convertedNumber = Number(text);

console.log(convertedNumber, typeof convertedNumber);

let numberValue = 23;
let convertedString = String(numberValue);

console.log(convertedString, typeof convertedString);

console.log(String(undefined));
console.log(Number(undefined));

console.log(String(null));
console.log(Number(null));


// ЗАДАНИЕ 5

let variable = 23;

console.log(variable, typeof variable);

variable = "Ерназар";

console.log(variable, typeof variable);


// ЗАДАНИЕ 6

let userName = prompt("Как тебя зовут?");
let userAge = prompt("Сколько тебе лет?");

console.log("Имя:", userName);
console.log("Возраст:", userAge);