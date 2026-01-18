// let grid = prompt(
//   "Введите число от 1 до 100 для определения количества столбцов и строк сетки"
// );

// if (grid === null) {
//   alert(
//     "Вы отказались от создания сетки, попробуйте снова, перезагрузив страницу"
//   );
// } else if (grid === "") {
//   alert("Вы ввели пустое значение, введите число от 1 до 100");
//   while (
//     (isNaN(parseInt(grid)) && parseInt(grid) !== "number") ||
//     grid < 1 ||
//     grid > 100
//   ) {
//     grid = prompt("Введите, пожалуйста, ИМЕННО число и ИМЕННО от 1 до 100");
//     if (grid === null) {
//       alert("Вы отказались от создания сетки, попробуйте снова, если хотите");
//     } else if (grid === "") {
//       alert("Вы ввели пустое значение, введите число от 1 до 100");
//     }
//   }
// } else {
//   while (
//     (isNaN(parseInt(grid)) && parseInt(grid) !== "number") ||
//     grid < 1 ||
//     grid > 100
//   ) {
//     grid = prompt("Введите, пожалуйста, ИМЕННО число и ИМЕННО от 1 до 100");
//     if (grid === null) {
//       alert("Вы отказались от создания сетки, попробуйте снова, если хотите");
//     } else if (grid === "") {
//       alert("Вы ввели пустое значение, введите число от 1 до 100");
//     }
//   }
// }

// if (grid) {
//   let defaultElem = "*";
//   let userElem = prompt(
//     "Введите один символ, который будет использоваться в вашей сетке"
//   );
//   if (userElem === "") {
//     for (let row = 1; row <= grid; row++) {
//       if (row % 2 === 0) {
//         console.log(`${defaultElem} `.repeat(grid));
//       } else {
//         console.log(` ${defaultElem}`.repeat(grid));
//       }
//     }
//   } else {
//     for (let row = 1; row <= grid; row++) {
//       if (row % 2 === 0) {
//         console.log(`${userElem} `.repeat(grid));
//       } else {
//         console.log(` ${userElem}`.repeat(grid));
//       }
//     }
//   }
// }

let grid = 5;
let elem = "*";

// for (let row = 1; row <= grid; row++) {
//   if (row % 2 === 0) {
//     console.log(`* ${+ grid} `);
//   } else {
//     console.log(`* + ${grid} `);
//   }
// }

for (let row = 1; row <= grid; row++) {
    console.log(elem += elem);
}

