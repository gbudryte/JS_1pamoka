"use strict";

const prompt = require("prompt-sync")();
let n = Number(prompt("Kiek saldainių gauna Marius? "));
let a = Number(prompt("Kiek sadainių jis suvalgo per dieną? "));;
let k = Number(prompt("Kiek dienų liko iki Kalėdų? "))

let viso_saldainiu = (n-a)*k
let draugai = Math.floor(viso_saldainiu/a)
let liks_saldainiu = viso_saldainiu%a

console.log(
  `Dovanas gaus ${draugai} draugu. \nMariui liks ${liks_saldainiu} saldainiu`
);