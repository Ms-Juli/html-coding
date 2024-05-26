"use strict"; // этот код работает в современном режиме
alert ("Я JavaScript!");

// alert ("Hello");
// [1, 2].forEach(alert);

/*let message;
message = "Hello";
alert (message);*/

/*let admin;
let name;
name = "Джон";
admin = name; //Копирование значения из одной переменной в другую
alert (admin);

alert (`Привет, ${name}`); //Вставили выражение в строку*/

/*let age = prompt('Сколько тебе лет?');
alert(`Тебе ${age} лет!`);

let isBoss = confirm("Ты сздесь главный?");
alert( isBoss );*/

/*let name = prompt("Как тебя зовут?");
alert(`Тебя зовут ${name}!`);*/

let value = true;
alert(typeof value); //boolean

value = String(value); //теперь value это строка true
alert(typeof value); //string

let age = Number("Любая строка");
alert(age); //Nan, преобразование не удалось

let x = 1;
x = -x;
alert(x); // -1

let n = 2;
n += 5;
n *= 2; 
alert(n);

