"use strict";

const prompt = require("prompt-sync")();
let a = Number(prompt("Kiek yra monetų po 5ct? "));
let b = Number(prompt("Kiek yra monetų po 20ct? "));
let c = Number(prompt("Kiek yra monetų po 2Lt? "));

let bendra_suma = a * 0.05 + b * 0.2 + c * 2;

console.log(`Taupyklėje iš viso yra ${bendra_suma} Lt`);
