
const button = document.getElementById("button") as HTMLElement || {};

const dice = {
  sides: 18,
  roll: function () {
    const randomNumber = Math.floor(Math.random() * this.sides) + 3;
    return randomNumber;
  }
};

function printNumber(number:any) {
  const guts = document.getElementById("guts") as HTMLElement;
  guts.innerHTML = number;
};

button.onclick = function () {
  const result = dice.roll();
  printNumber(result);
};

export {};