"use strict";

// let name = "Джон";
// let admin = name;
// alert(admin);

//Переменная для названия планеты земля
// let currentSiteUser = "John";
// let outPlanetName = "Earth";

// let nameUser = prompt ("Как тебя зовут?");
// alert(nameUser);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

// 

// let name = prompt ("Какое «официальное» название JavaScript?", "");
// if (name == "ECMAScript") {
//     alert ("Верно!");
// } else {
//     alert ("Не знаете? ECMAScript!");
// }

// let number = prompt("Введите число: ", "");
// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert (-1);
// } else {
//     alert(0);
// }

// let result;
// result = (1 + 3 < 4) ? "Мало" : "Много";

// let login;
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

// let age = prompt("Введите число: ");
// if (age < 14) {
//     alert("Мало");
// } else if (age > 90) {
//     alert("Too much");
// } else {
//     alert("right!");
// }

// if (age >= 14 && age <= 90)

// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

//Для проверки на чётность мы здесь используем оператор получения остатка от деления %.
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }

// Переписан цикл с for на while
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//   alert (`number ${i} !`);
//   i++;
// }

// 
function checkAge(age) {
  return(age > 18 ? true : confirm('Родители разрешили?'));
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}




