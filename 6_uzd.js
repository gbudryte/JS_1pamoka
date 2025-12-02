"use strict";

const prompt = require("prompt-sync")();
let a = Number(prompt("Trapecijos pagrindo ilgis: "));
let b = Number(prompt("Kito trapecijos pagrindo ilgis: "));
let h = Number(prompt("Trapecijos aukštinė: "));

let trapecijos_plotas = ((a + b) * h) / 2;

console.log(`Trapecijos plotas: ${trapecijos_plotas}`);
