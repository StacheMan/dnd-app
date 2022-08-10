
const button = document.getElementById("button") as HTMLElement;

const dice = {
  sides: 20,
  roll: function () {
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
};

function printNumber(number:any) {
  var guts = document.getElementById("guts") as HTMLElement;
  guts.innerHTML = number;
};

button.onclick = function () {
  const result = dice.roll();
  printNumber(result);
};

export {};