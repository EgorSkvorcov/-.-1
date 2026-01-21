let grid = prompt(
  "Введите число от 1 до 100 для определения количества столбцов и строк сетки"
);

do {
  if (grid === null) {
    alert("нет");
    break;
  }
  while (isNaN(parseInt(grid)) || parseInt(grid) > 100 || parseInt(grid) < 1) {
    grid = prompt("Проверьте, что корректно введено число от 1 до 100");
    if (grid === null) {
      break;
    }
  }
} while (isNaN(parseInt(grid)) || parseInt(grid) > 100 || parseInt(grid) < 1);

let userElem =
  prompt("Введите символ, который будет использоваться в сетке") || "*";

for (let i = 0; i < grid; i++) {
  let row = "";
  for (let j = 0; j < grid; j++) {
    i % 2 === 0 ? (row += `${userElem} `) : (row += ` ${userElem}`);
  }
  console.log(row);
}
