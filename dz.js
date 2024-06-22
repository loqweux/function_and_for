// DZ 2

// let a = 45;
// const a1 = 45;

// for (let i = 0; i < a1; i++) {
//   a += 1;
// }
// console.log(a);

// DZ 3

// for (let i = 0; i < 10; i += 2) {
//   let a = +prompt("введите число");
//   if (a === 10) {
//     console.log("Равно 10");
//   } else {
//     console.log("Не равно 10");
//   }
// }

// DZ 4

// let num = prompt("Сколько чисел надо вывести?");
// const num1 = num;
// for (let i = 0; i < num1; i++) {
//   let result = i ** 2;
//   console.log(result);
// }

// DZ 5

// for (let i = 1; i < 100; i++) {
//   //   console.log(i); // для проверки
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log("error");
//   }
// }

// // DZ 6
// let i = 0;
// while (i < 3) {
//   alert("Номер:" + i);
//   i++;
// }

// // DZ 7

// let min = +prompt("Минимум диапазона");
// let max = +prompt("Максимальный диапазон");
// function calcResult(min, max) {
//   for (let i = min; i < max; i++) {
//     let result = i ** 2;
//     console.log(result);
//   }
// }

// calcResult(min, max);

// // DZ 8

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRGBColor() {
//   let firstNum = getRandomInteger(10, 20); // для примера
//   let secondNum = getRandomInteger(50, 100); // для примера
//   let thirdNum = getRandomInteger(250, 500); // для примера
//   let result = "rgb(" + firstNum + "," + secondNum + "," + thirdNum + ")";
//   console.log(result);
// }

// getRGBColor();

// // DZ 9

// function IntOrDec() {
//   let n = +prompt("Какое число будет параметром вывода n?");
//   for (let i = 0; i < n; i += 0.5) {
//     if (Number.isInteger(i)) {
//       // isInteger - проверяет на то, целое ли число
//       console.log(`${i} integer`);
//     } else {
//       console.log(`${i} decimal`);
//     }
//   }
// }

// IntOrDec();

// // DZ 10

// function calcPrice() {
//   let days = +prompt(
//     "Введите количество дней, на которые надо арендовать авто"
//   );
//   const cost = 40;
//   let result;
//   if (days >= 7) {
//     result = cost * days - 50;
//     console.log(`Общая стоимость аренды: ${result}`);
//   } else if (days >= 3) {
//     result = cost * days - 20;
//     console.log(`Общая стоимость аренды: ${result}`);
//   } else {
//     result = cost * days;
//     console.log(`Общая стоимость аренды: ${result}`);
//   }
// }
// calcPrice();
