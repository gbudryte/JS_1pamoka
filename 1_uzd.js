"use strict";

let pamoku_skaicius = Number(0);
let pamoku_per_diena;
const prompt = require("prompt-sync")();

for (let diena = 1; diena < 6; diena++) {
  pamoku_per_diena = Number(prompt("Kiek pamokų yra " + diena + "dienį? "));
  pamoku_skaicius += pamoku_per_diena;
}

console.log(
  "Pamoku skaicius " +
    pamoku_skaicius +
    "\nTai sudaro: " +
    pamoku_skaicius * 45 +
    " minuciu"
);
