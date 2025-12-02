"use strict";

const prompt = require("prompt-sync")();
let v = Number(prompt("Koks automobilio greitis [km/h]? "));

let laikas = Number((3600 * 0.264) / v).toFixed(2);

console.log(`Automobilis tunelį pravažiuos per ${laikas} s`);
