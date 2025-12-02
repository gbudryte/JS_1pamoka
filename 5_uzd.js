"use strict";

const prompt=require("prompt-sync")();
let a = Number(prompt("Koks sienos ilgis metrais? "));
let h = Number(prompt("Koks sienos aukštis metrais? "));
let k = Number(prompt("Kokia vienos plytos kaina? "));

let plytos_ilgis = 0.2
let plytos_aukstis = 0.1

let plytu_kiekis = Math.round((a*h)/(plytos_ilgis*plytos_aukstis));
let plytu_kaina = Number(plytu_kiekis*k).toFixed(2)



console.log(`Reiks ${plytu_kiekis} plytu, kurios kainuos ${plytu_kaina} Lt`);