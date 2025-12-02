"use strict";

const prompt = require("prompt-sync")();
let k = Number(prompt("Kiek turime automobilių? "));
let m = Number(prompt("Kiek automoblių telpa kelte? "));;

let kelioniu_skaicius = Math.floor(k/m);
let neperkelti_automobiliai = k % m;

console.log(
  `Keltui teks keltis ${kelioniu_skaicius} kartus, laukti liks ${neperkelti_automobiliai} automobiliai`
);