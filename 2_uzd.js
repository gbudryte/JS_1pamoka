"use strict";

const prompt = require("prompt-sync")();
let a = Number(prompt("Kiek žuvų gyvena akvariume? "));
let b = Number(prompt("Po kiek žuvų įdedama kasdien? "));
let n = Number(prompt("Kiek dienų praėjo? "));

let zuvu_skaicius = a + b * n;

console.log(`Akvariume yra ${zuvu_skaicius} žuvų`);
